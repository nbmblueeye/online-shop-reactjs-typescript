import Rating from '@mui/material/Rating';

type Props = {
    rate: number
}

const StarRating = ({rate}: Props) => {
  return (
    <Rating name="read-only" value={rate} readOnly />
  )
}

export default StarRating