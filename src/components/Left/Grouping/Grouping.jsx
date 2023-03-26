import GroupingBox from "../../Grouping/Grouping"
import { GroupingValues, GroupingValues2 } from "../../../events/events"
import SubTitle from '@/components/SubTitle/subTitle'
export default function Grouping() {
        return (
                <>
                        <div className="mt-3">
                                <SubTitle NameTitle="دسته بندی فیلم ها" />
                        </div>
                        <div className="Grouping">
                                <div className="GroupingMain mt-4">
                                        {
                                                GroupingValues.map((e) => {
                                                        return <GroupingBox key={e.id} Name={e.name} Number={e.Number} />
                                                })
                                        }
                                </div>
                        </div>
                        <div className="mt-3">
                                <SubTitle NameTitle="دسته بندی سریال ها" />
                        </div>
                        <div className="Grouping">
                                <div className="GroupingMain mt-4">
                                        {
                                                GroupingValues2.map((e) => {
                                                        return <GroupingBox key={e.id} Name={e.name} Number={e.Number} />
                                                })
                                        }
                                </div>
                        </div>
                </>
        )
}
