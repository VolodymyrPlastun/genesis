import UnlockedLessons from "../UnlockedLessons/UnlockedLessons";
import LockedLessons from "../LockedLessons/LockedLessons";

const LessonItem = ({ lesson }) => {
  const { status, title, previewImageLink, order, duration, link } = lesson;

  return (
    <>
      {status === "unlocked" ? (
        <UnlockedLessons
          order={order}
          previewImageLink={previewImageLink}
          title={title}
          link={link}
          duration={duration}
        />
      ) : (
        <LockedLessons title={title} />
      )}
    </>
  );
};

export default LessonItem;
