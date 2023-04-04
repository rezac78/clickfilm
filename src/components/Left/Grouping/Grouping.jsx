import GroupingBox from "../../Grouping/Grouping"
import SubTitle from '@/components/SubTitle/subTitle'
export default function Grouping({ FilmPart }) {
        let CountPartFilm = 0;
        let ArrayPartFilm = []
        for (let i = 0; i < FilmPart.length; i++) {
                if (FilmPart[i].tags.toString()) {
                        let StringPartFilm = FilmPart[i].tags.toString();
                        ArrayPartFilm.push(StringPartFilm)
                        CountPartFilm++;
                }
        }
        const ObjectPartFilm = ArrayPartFilm.join()
        const ReplacePartFilm = ObjectPartFilm.replace(/,/g, " ");
        const obj = {};

        ReplacePartFilm.split(" ").forEach(function (el, i, arr) {
                obj[el] = obj[el] ? ++obj[el] : 1;
        });
        const NumberTags = Object.entries(obj)
        return (
                <>
                        <div className="mt-3">
                                <SubTitle NameTitle="دسته بندی فیلم ها" />
                        </div>
                        <div className="Grouping">
                                <div className="GroupingMain mt-4">
                                        {
                                                <GroupingBox NumberTags={NumberTags} />

                                        }
                                </div>
                        </div>
                        <div className="mt-3">
                                <SubTitle NameTitle="دسته بندی سریال ها" />
                        </div>
                        {/* <div className="Grouping">
                                <div className="GroupingMain mt-4">
                                        {
                                                GroupingValues2.map((e) => {
                                                        return <GroupingBox key={e.id} Name={e.name} Number={e.Number} />
                                                })
                                        }
                                </div>
                        </div> */}
                </>
        )
}
