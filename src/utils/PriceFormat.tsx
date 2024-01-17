type Props = {
    price: number
}
const PriceFormat = ({price}:Props) => {

    const options2 = { style: 'currency', currency: 'USD' };
    const numberFormat2 = new Intl.NumberFormat('en-US', options2);
    const priceFormat  = numberFormat2.format(price)
  return (
    <>
       { priceFormat}
    </>
  )
}

export default PriceFormat