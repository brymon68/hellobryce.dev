import Container from './container';
import markdownStyles from './markdown-styles.module.css';

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="z-0">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default PostBody;
