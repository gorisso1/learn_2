import {useParams} from "next/navigation";
import Layout from "layout/layout";
import Create_comment from "components/forum/comment/create_comment";
import CommentComponent from "components/forum/comment/commentComponent";
import {useRouter} from "next/router";

const ForumID = () =>{
    const router = useRouter();
    const { id } = router.query;
    const forumId = id as string;

    // Проверяем, есть ли параметр 'id'
    if (!id) {
        // Можно обработать случай, когда 'id' отсутствует
        return <div>Отсутствует параметр 'id'</div>;
    }
    return(
      <Layout>
          <CommentComponent id={forumId}/>
      </Layout>

    )

}

export default ForumID;