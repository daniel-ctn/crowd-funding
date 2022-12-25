import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useAddress, useContract, useContractWrite, useMetamask } from '@thirdweb-dev/react'

import { money } from '@assets'
import './MainContent.css'
import Loading from '@components/common/Loading'

const schema = yup
  .object({
    name: yup.string().required(),
    title: yup.string().required(),
    story: yup.string().required(),
    goal: yup.number().positive().integer().required(),
    deadline: yup.date().required(),
    image: yup.string().required(),
  })
  .required()

type FormData = yup.InferType<typeof schema>

const MainContent: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })
  const { contract } = useContract('0x25dDFDFD6bab1C61Dad40AcC947Cf9Ba2A9Df7C1')
  const { mutateAsync: createCampaign, isLoading } = useContractWrite(contract, 'createCampaign')
  const address = useAddress()
  const connect = useMetamask()

  const submitForm = async (data: FormData) => {
    try {
      const result = await createCampaign([data.title, data.story, data.goal, data.deadline.getTime(), ''])
      reset()
    } catch (e) {
      console.log(e)
    }
  }

  if (isLoading) return <Loading />

  return (
    <div className="create-campaign__wrapper">
      <form className="create-campaign__form" onSubmit={handleSubmit(submitForm)}>
        <h2 className="create-campaign__form--title heading-2">Start a Campaign</h2>
        <div className="create-campaign__form--input">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" {...register('name')} className="common-input" />
        </div>
        <div className="create-campaign__form--input">
          <label htmlFor="title">Campaign Title:</label>
          <input type="text" id="title" {...register('title')} className="common-input" />
        </div>
        <div className="create-campaign__form--input">
          <label htmlFor="story">Story:</label>
          <textarea id="story" rows={4} {...register('story')} className="common-input" />
        </div>
        <div className="create-campaign__form--input">
          <label htmlFor="goal">Goal:</label>
          <input type="number" id="goal" {...register('goal')} className="common-input" />
        </div>
        <div className="create-campaign__form--info">
          <img src={money} alt="Money icon" className="mb-1 w-8" />
          <h5>You will get 100% of the raised amount</h5>
        </div>
        <div className="create-campaign__form--input">
          <label htmlFor="deadline">End date:</label>
          <input type="date" id="deadline" {...register('deadline')} className="common-input" />
        </div>
        <div className="create-campaign__form--input create-campaign__form--file">
          <label htmlFor="image">Campaign banner:</label>
          <input type="file" id="image" {...register('image')} className="common-input" />
        </div>
        <div className="create-campaign__form--action">
          <button className="secondary-btn">Cancel</button>
          <button className="primary-btn" type="submit">
            Publish your campaign
          </button>
        </div>
      </form>
    </div>
  )
}

export default MainContent
