import {
  ShowResultContainer,
  ResultImagesContainer,
  ResultTextImgContainer,
  ResultText,
  ResultImageItem,
  ResultButtonContainer,
  PlayAgainButton,
} from './styledCopmonents'

const GameResultView = props => {
  const {myChoice, apponentChoice, resultMesssage, playAgain} = props
  const {image} = apponentChoice

  const onClickPlayAgainButton = () => {
    playAgain()
  }

  return (
    <ShowResultContainer>
      <ResultImagesContainer>
        <ResultTextImgContainer>
          <ResultText>YOU</ResultText>
          <ResultImageItem src={myChoice[1]} alt="your choice" />
        </ResultTextImgContainer>
        <ResultTextImgContainer>
          <ResultText>OPPONENT</ResultText>
          <ResultImageItem src={image} alt="opponent choice" />
        </ResultTextImgContainer>
      </ResultImagesContainer>
      <ResultText>{resultMesssage}</ResultText>
      <ResultButtonContainer>
        <PlayAgainButton type="button" onClick={onClickPlayAgainButton}>
          Play Again
        </PlayAgainButton>
      </ResultButtonContainer>
    </ShowResultContainer>
  )
}

export default GameResultView
