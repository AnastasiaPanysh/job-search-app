import style from "./Preview.module.css";

function AdvantagesItem({ logo, paragraph, image }) {

  return (

    <div className={style["section"]}>
      <div className={style[image]}></div>
      <div className={style["paragraph"]}>
        <h2>{logo}</h2>
        <p>{paragraph}</p>
      </div>
    </div>


  )
}

export default AdvantagesItem