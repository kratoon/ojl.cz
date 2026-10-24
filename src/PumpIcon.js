function PumpIcon({ className }) {
    return (
        <svg className={className} viewBox="14 -2 194 400" aria-hidden="true">
            <circle cx="130" cy="62" r="52" />
            <circle className="outline" cx="130" cy="62" r="41" />
            <text x="130" y="73" textAnchor="middle">
                GAS
            </text>
            <rect x="118" y="108" width="24" height="24" />
            <rect x="66" y="128" width="128" height="40" rx="12" />
            <rect x="76" y="160" width="108" height="212" />
            <path className="outline" d="M86 178v176M174 178v176" />
            <path className="outline" d="M98 298V222a32 32 0 0 1 64 0v76q0 8-8 8h-48q-8 0-8-8z" />
            <circle className="outline" cx="130" cy="207" r="8" />
            <rect className="outline" x="106" y="232" width="48" height="20" />
            <path className="outline" d="M122 232v20M138 232v20" />
            <rect className="outline" x="106" y="258" width="48" height="20" />
            <path className="outline" d="M122 258v20M138 258v20" />
            <rect className="outline" x="96" y="316" width="68" height="26" rx="6" />
            <rect x="60" y="360" width="140" height="36" rx="3" />
            <path className="hose" d="M72 246c-14 0-16-26 4-32" />
            <rect x="52" y="240" width="22" height="60" rx="7" transform="rotate(-6 63 270)" />
            <path className="hose" d="M60 298C50 336 24 362 34 384c8 14 30 6 36-14" />
        </svg>
    );
}

export default PumpIcon;
