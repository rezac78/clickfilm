import Link from 'next/link'
export default function GroupingBox({ Name, Number }) {
        return (
                <>
                        <div className="GroupingOnce"><Link href="#">{Name}</Link><span>{Number}</span></div>
                </>
        )
}
