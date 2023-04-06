export default function Footer() {
        const DateNew = new Date()
        const DateClickFilm = DateNew.toISOString().split('-')[0]
        return (
                <>
                        <div className="Footer text-center">
                                <span>ClickFilm {DateClickFilm}</span>
                        </div>
                </>
        )
}
