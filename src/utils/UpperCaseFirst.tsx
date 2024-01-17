type Props = {
    text: string
}

const UpperCaseFirst = ({text}:Props) => {

  const newText = text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <>
        {newText}
    </>
  )
}

export default UpperCaseFirst