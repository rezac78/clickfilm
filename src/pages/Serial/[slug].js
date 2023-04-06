import { GraphQLClient, gql } from "graphql-request";
import Meta from "@/components/MetaTitle/Meta";
import PartSerial from "../../components/pageShow/Serial.jsx";
export const getServerSideProps = async (pageContext) => {
  const url =
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clfze5ufq6z0t01ui0x1zan9t/master";
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODA1MTMwODQsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xmemU1dWZxNnowdDAxdWkweDF6YW45dC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiOWUwNzMwMGItMDJiYy00M2Y3LWExYzEtOTA3ZDZiNWMzMDRkIiwianRpIjoiY2xnMG0zbjZrN240eDAxdWkzYWRvZ29haiJ9.WS1Sb39th6FrsqyjOAjjHsvm_M8OqQmcork0jd-prcH-eU-N_96dBvhiIWKA74ikk-4u4UM1BRcyUGBVvjDKdQH1499eJH2Qmqg5GWd9YdI_ysC9KSJkX4-YlyHPwdIttH9zMKnKGVcPcyve7cZGRB8CQ-OIPr31mr0n8tZ-bHoIykDbCh4hZtvIGKYztE-JfWzYevDchC-NoR461_Toa-YggbUVyJ4S3Rg7P-fzl7HeD7ke3OVhbfNkOKgMjFczySud7O0BVrIKYr5_z0DEMtn2XUoxHqMBN41zjvZYajvgP_w_FWpagzrpFAt8xesCwMWiy3EQedwjR31nU9LKu9Nq6RSKPwRH4IGFiKohhBuDkDA26GnNVO2v5gftGovOiK2fqU76jmB0jm4mRMiQ2za8bRxGv_8I6eoT6mxbAm0bwvH2C1YVfEcYAq7uh65MLv80Gc0KYCUsgbT7WcXv69N2Nbrod_r-7_1-WBFUE49pYXWPwrzBdnNXKa-V6qwxFTBXRI6nDzxTA1LjK3i0HnQ_3NDHXxLVRTNYDJ---NdKhUlIpyuSr9oW6LROTO-4gYs5JcDbkp_fPaX8b654hVXLw1XV6tbIVS9_oHZtRQSFc5vknkCZYCcAc6vjvm4hqFooQOBplNsjIaEy_95IqyeYlMP3JfU7YSUv9qshymE",
    },
  });

  const pageSlug = pageContext.query.slug;
  const query2 = gql`
    query ($pageSlug: String!) {
      serials (where: { slug: $pageSlug }) {
        createdAt
        id
        title
        description
        slug
        tags
        director
        actors
        format
        number
        episode
        network
        mp4 {
          url
        }
        cover {
          url
        }
        coverPhone {
          url
        }
      }
    }
  `;
  const variables = {
    pageSlug,
  };
  const data2 = await graphQLClient.request(query2, variables);
  const Serial = data2.serials;
  return {
    props: {
      Serial,
    },
  };
};

export default function Serial({ Serial }) {
  return (
    <>
      <Meta NameTitle="Download" linkTitle="Home" />
      <div style={{ background: "#111111" }}>
        {Serial.map((e) => {
          return (
            <PartSerial
              key={e.id}
              cover={e.cover.url}
              CoverPhone={e.coverPhone.url}
              MP4={e.mp4.url}
              Title={e.title}
              Tags={e.tags}
              Director={e.director}
              Actors={e.actors}
              Description={e.description}
            />
          );
        })}
      </div>
    </>
  );
}
