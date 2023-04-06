import Headers from "../components/Header/header"
import Card from '@/components/Card/Card'
import Meta from "@/components/MetaTitle/Meta"
import Footer from "@/components/Footer/Footer"
import { GraphQLClient, gql } from "graphql-request";
export const getStaticProps = async () => {
        const url =
                "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clfze5ufq6z0t01ui0x1zan9t/master";
        const graphQLClient = new GraphQLClient(url, {
                headers: {
                        Authorization:
                                "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODA1MTMwODQsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xmemU1dWZxNnowdDAxdWkweDF6YW45dC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiOWUwNzMwMGItMDJiYy00M2Y3LWExYzEtOTA3ZDZiNWMzMDRkIiwianRpIjoiY2xnMG0zbjZrN240eDAxdWkzYWRvZ29haiJ9.WS1Sb39th6FrsqyjOAjjHsvm_M8OqQmcork0jd-prcH-eU-N_96dBvhiIWKA74ikk-4u4UM1BRcyUGBVvjDKdQH1499eJH2Qmqg5GWd9YdI_ysC9KSJkX4-YlyHPwdIttH9zMKnKGVcPcyve7cZGRB8CQ-OIPr31mr0n8tZ-bHoIykDbCh4hZtvIGKYztE-JfWzYevDchC-NoR461_Toa-YggbUVyJ4S3Rg7P-fzl7HeD7ke3OVhbfNkOKgMjFczySud7O0BVrIKYr5_z0DEMtn2XUoxHqMBN41zjvZYajvgP_w_FWpagzrpFAt8xesCwMWiy3EQedwjR31nU9LKu9Nq6RSKPwRH4IGFiKohhBuDkDA26GnNVO2v5gftGovOiK2fqU76jmB0jm4mRMiQ2za8bRxGv_8I6eoT6mxbAm0bwvH2C1YVfEcYAq7uh65MLv80Gc0KYCUsgbT7WcXv69N2Nbrod_r-7_1-WBFUE49pYXWPwrzBdnNXKa-V6qwxFTBXRI6nDzxTA1LjK3i0HnQ_3NDHXxLVRTNYDJ---NdKhUlIpyuSr9oW6LROTO-4gYs5JcDbkp_fPaX8b654hVXLw1XV6tbIVS9_oHZtRQSFc5vknkCZYCcAc6vjvm4hqFooQOBplNsjIaEy_95IqyeYlMP3JfU7YSUv9qshymE",
                },
        });
        const query1 = gql`
    query {
        hbos {
                createdAt,
                id,
                title,
                description,
                mp4{
                  url
                },
                poster {
                  url
                }
            }
    }
  `;
        const data: any = await graphQLClient.request(query1);
        const HBO = data.hbos
        return {
                props: {
                        HBO,
                }
        }
}
interface PageProps {
        HBO: any;
}
export default function HBO(props: PageProps) {
        const HBO = props.HBO
        return (
                <>
                        <Meta NameTitle="HBO" linkTitle="HBO" />
                        <Headers />
                        <div className="card-cantainer">
                                {HBO.map((e: any) => {
                                        return <Card key={e.id} poster={e.poster.url} summary={e.description} name={e.title} videoPoster={e.mp4.url} />
                                })}
                        </div>
                        <Footer />
                </>
        )
}
