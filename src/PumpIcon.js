function PumpIcon({ className }) {
    return (
        <svg className={className} viewBox="16 0 190 396" aria-hidden="true">
            <circle cx="130" cy="62" r="52" />
            <circle className="cut-line" cx="130" cy="62" r="41" />
            <text className="cut-text globe-text" x="130" y="73" textAnchor="middle">
                GAS
            </text>
            <rect x="118" y="108" width="24" height="24" />
            <rect x="66" y="128" width="128" height="40" rx="12" />
            <rect x="76" y="160" width="108" height="212" />
            <rect className="cut" x="84" y="178" width="5" height="176" />
            <rect className="cut" x="171" y="178" width="5" height="176" />
            <path className="cut" d="M98 298V222a32 32 0 0 1 64 0v76q0 8-8 8h-48q-8 0-8-8z" />
            <circle className="line" cx="130" cy="207" r="8" />
            <rect className="line" x="106" y="232" width="48" height="20" />
            <path className="line" d="M122 232v20M138 232v20" />
            <rect className="line" x="106" y="258" width="48" height="20" />
            <path className="line" d="M122 258v20M138 258v20" />
            <rect className="cut" x="96" y="316" width="68" height="26" rx="6" />
            <rect x="60" y="360" width="140" height="36" rx="3" />
            <path className="stroke" d="M72 246c-14 0-16-26 4-32" />
            <rect x="52" y="240" width="22" height="60" rx="7" transform="rotate(-6 63 270)" />
            <path className="stroke" d="M60 298C50 336 24 362 34 384c8 14 30 6 36-14" />
        </svg>
    );
}

export default PumpIcon;
