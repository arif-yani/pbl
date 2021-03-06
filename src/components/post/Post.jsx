import "./post.css"

export default function Post() {
    return (
        <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
         <span className="postCat">Wisata</span>
         <span className="postCat">Travel</span>
        </div>
        <span className="postTitle">Lorem ipsum, dolor sit amet</span> 
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
    )
}
