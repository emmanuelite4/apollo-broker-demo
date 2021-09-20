import { displayDate } from "../utils";

const Story = (props) => {
  const { title, score, kids, by, url, index, time } = props;
  console.log(props);
  return (
    <>
      <tr className={"primary"}>
        <td>{index}</td>
        <td>
          <a href={url} target={"_blank"} rel="noreferrer" className={"title"}>
            {title}
          </a>
        </td>
      </tr>
      <tr>
        <td></td>
        <td className={"secondary"}>
          <span>{score} points</span>
          <span>by: {by}</span>
          <span>{displayDate(time)}</span>
          <span>{kids && kids.length} comments</span>
        </td>
      </tr>
      <tr style={{ height: 5 }}></tr>
    </>
  );
};
export default Story;
