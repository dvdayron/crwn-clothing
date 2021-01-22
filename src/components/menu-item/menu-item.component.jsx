import './menu-item.styles.scss';
import { withRouter } from "react-router-dom";

function MenuItem({title, imageUrl, size, linkUrl, history, match}) {
  return (
    <div 
      onClick={() => {history.push(`${match.url}${linkUrl}`)}}
      className={`${size} menu-item`}>
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

export default withRouter(MenuItem);