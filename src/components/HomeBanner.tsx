const HomeBanner = () => {
  return (
    <div className="product-home-banner-wrapper">
      <div className="container">
        <div className="product-home-banner">
          <div className="product-home-banner-infor">
            <h1 className="title">Black Friday Coming</h1>
            <p className="text">Enjoy your selected Item Sale</p>
            <h4 className="sub-title">GET 50% OFF</h4>
          </div>
          <div className="product-home-banner-image">
            <img src={`${import.meta.env.VITE_API_BASE_URL}/images/home-banner.png`} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner