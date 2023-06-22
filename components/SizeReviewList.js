function formatData(date) {
  const MM = String(date.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(date.getUTCDate()).padStart(2, "0");
  const YY = String(date.getUTCFullYear());

  return `${YY}. ${MM}. ${dd}.`;
}

const labels = {
  sex: {
    male: "남자",
    female: "여자",
  },
  fit: {
    small: "작음",
    good: "적당함",
    big: "큼",
  },
};

export default function SizeReviewList({ sizeReviews }) {
  return (
    <ul>
      {sizeReviews.map((sizeReview) => (
        <li key={sizeReview.id}>
          <div>
            <div>{formatData(new Date(sizeReview.createdAt))}</div>
            <div>
              ({labels.sex[sizeReview.sex]} {sizeReview.height}cm 기준)
              {labels.fit[sizeReview.fit]}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
