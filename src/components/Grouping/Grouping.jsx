import Link from 'next/link'
export default function GroupingBox({ NumberTags }) {
        return (
                <>
                        {NumberTags.map(([key, value]) => {
                                return <div key={key} className="GroupingOnce"><Link href="#">{key}</Link><span>{value}</span></div>
                        })}
                </>
        )
}
