import './menu-item.styles.scss';

function MenuItem({title, imageUrl, size}) {
  return (
    <div className={`${size} menu-item`}>
        <div 
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
        className="background-image"></div>
        <div className="content">
          <h1 className="title">
            {title}
          </h1>
          <span className="subtitle">
            Shop now
          </span>
        </div>
      </div>
  )
}

export default MenuItem;