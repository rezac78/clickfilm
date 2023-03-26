import SubTitle from '@/components/SubTitle/subTitle'
import Link from 'next/link'
import { SerialsPartValues } from "../../../events/events"
import Serial from '../../../components/Left/Serial/serial'
export default function Serials() {
        return (
                <>
                        <div className="mt-3">
                                <SubTitle NameTitle="آخرین سریال ها" />
                        </div>
                        <div className="partserial">
                                {
                                        SerialsPartValues.map((e) => {
                                                return <Serial key={e.id} ImageCover={e.image} Name={e.name} PartSerial={e.PartSerial} />
                                        })
                                }
                        </div>
                        <div className="text-center submit-one mt-3">
                                <Link href="/Serial">
                                        <SubTitle NameTitle="ورود به ارشیو سریال ها" />
                                </Link>
                        </div>
                </>
        )
}
