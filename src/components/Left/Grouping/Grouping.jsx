import GroupingBox from "../../Grouping/Grouping"
import SubTitle from '@/components/SubTitle/subTitle'
export default function Grouping({ FilmPart, PartSerial }) {
        let CountPartFilm = 0;
        let ArrayPartFilm = []
        for (let i = 0; i < FilmPart.length; i++ || null) {
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

        let CountPartSerial = 0;
        let ArrayPartSerial = []
        for (let i = 0; i < PartSerial.length; i++ || null) {
                if (PartSerial[i].tags.toString()) {
                        let StringPartSerial = PartSerial[i].tags.toString();
                        ArrayPartSerial.push(StringPartSerial)
                        CountPartSerial++;
                }
        }
        const ObjectPartSerial = ArrayPartSerial.join()
        const ReplacePartSerial = ObjectPartSerial.replace(/,/g, " ");
        const obj2 = {};
        ReplacePartSerial.split(" ").forEach(function (el, i, arr) {
                obj2[el] = obj2[el] ? ++obj2[el] : 1;
        });
        const NumberTagsSerial = Object.entries(obj2)
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
                        <div className="Grouping">
                                <div className="GroupingMain mt-4">
                                        {
                                                <GroupingBox NumberTags={NumberTagsSerial} />
                                        }
                                </div>
                        </div>
                </>
        )
}
