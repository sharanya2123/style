import {ButtonsLiConatiner, ButtonImage, ImageItem} from './styledCopmonents'

const Buttons = props => {
  const {buttonDetails, onGetId} = props
  const {id, image} = buttonDetails
  const lowerCaseId = id.toLowerCase()

  const onClickButton = () => {
    onGetId(id, image)
  }

  return (
    <ButtonsLiConatiner>
      <ButtonImage
        type='button'
        data-testid={`${lowerCaseId}Button`}
        onClick={onClickButton}
      >
        <ImageItem src={image} alt={id} />
      </ButtonImage>
    </ButtonsLiConatiner>
  )
}

export default Buttons
