export default function Search() {
        return (
                <>
                        <div className="container mt-4">
                                <div className="user-info">
                                        <div className="img-name">
                                                <i onclick="toggleUserDetails()" className="fas fa-chevron-down"></i>
                                                <span>جستجوی پیشرفته</span>
                                        </div>
                                        <div className="details">
                                                <input type="search" placeholder="دنبال چی می گردی .." className="form-control" />
                                        </div>
                                </div>
                        </div>
                </>
        )
}
