import { useParams, Link } from "react-router-dom";

export default function ProjectDetail() {
    const { id } = useParams();

    return (
        <div className="page project-detail-page">
            <Link to='/projects' className="back-link">&larr; Back to Projects</Link>
            <div className="detail-card">
                <div className="detail-header">
                    <span className="project-badge">Project #{id}</span>
                    <h2>Project Overview</h2>
                </div>
                <p className="detail-desc">
                    Viewing detailed technical specs, feature breakdowns, and implementation notes for <strong>Project #{id}</strong>.
                </p>
                <div className="detail-meta">
                    <div className="meta-item">
                        <span className="meta-label">Status</span>
                        <span className="meta-value status-active">● Active</span>
                    </div>
                    <div className="meta-item">
                        <span className="meta-label">Category</span>
                        <span className="meta-value">Web Application</span>
                    </div>
                </div>
            </div>
        </div>
    )
}