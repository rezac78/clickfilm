import Image from 'next/image'
import Link from 'next/link'
import GroupingBox from "../../Grouping/Grouping"
import { GroupingValues, GroupingValues2 } from "../../../events/events"
export default function Grouping() {
        return (
                <>
                        <div className="textCollection text-center mt-2">
                                <span>دسته بندی فیلم ها</span>
                        </div>
                        <div className="Grouping">
                                <div className="GroupingMain">
                                        {
                                                GroupingValues.map((e) => {
                                                        return <GroupingBox key={e.id} Name={e.name} Number={e.Number} />
                                                })
                                        }
                                </div>
                        </div>
                        <div className="textCollection text-center mt-2">
                                <span>دسته بندی سریال ها</span>
                        </div>
                        <div className="Grouping">
                                <div className="GroupingMain">
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
