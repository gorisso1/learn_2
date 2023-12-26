import Link from 'next/link'
import Layout from "../layout/layout";
import Category from "components/category/category";

const IndexPage = () =>{
  return(
      <>
        <Layout>
            <Category/>
        </Layout>


      </>
  )
}


export default IndexPage;
