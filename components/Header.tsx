import Link from 'next/link';

function Icon() {
    return (
        <>
            <svg width='20px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 434.47 415.82">
                <g id="图层_2" data-name="图层 2">
                    <g id="图层_1-2" data-name="图层 1">
                        <path className="cls-1"
                              style={ { fill: '#231815' } }
                              d="M417.62,63.06l-19,0a15.15,15.15,0,0,1-15.14-15.13,14.81,14.81,0,0,1,.69-4.5l7-21.35a16.84,16.84,0,0,0-16-22H183.8a16.83,16.83,0,0,0-16,11.64S154.3,53,154.3,53.07a15.25,15.25,0,0,1-14.29,10H100.23a16.88,16.88,0,0,0-16,11.6L.84,330.76a16.83,16.83,0,0,0,16,22H36.12a15.15,15.15,0,0,1,14.17,19.63l-6.94,21.4a16.81,16.81,0,0,0,16,22H313.7a16.77,16.77,0,0,0,16-11.6l13.37-41a15.18,15.18,0,0,1,14.41-10.4h39.78a16.83,16.83,0,0,0,16-11.6l9.55-29.42a16.81,16.81,0,0,0-16-22H387.8a15.15,15.15,0,0,1-15.14-15.13,15.81,15.81,0,0,1,.45-3.66c.16-.68,7.22-22.19,7.22-22.19a16.83,16.83,0,0,0-16-22H251a16.84,16.84,0,0,1-16-22l1.28-3.93a16.78,16.78,0,0,1,16-11.6H324.5a16.81,16.81,0,0,0,16-11.64l13.29-40.71a15.21,15.21,0,0,1,14.53-10.72h39.78a16.83,16.83,0,0,0,16-11.6l9.59-29.38A16.84,16.84,0,0,0,417.62,63.06ZM371.34,82.65s-10.72,33.16-10.92,33.56a15.19,15.19,0,0,1-14.25,9.87H209.73a16.84,16.84,0,0,0-16,11.64l-42.3,130a16.77,16.77,0,0,0,16,22H345.73c8.67,0,15.9,7.11,15.53,15.78a15.62,15.62,0,0,1-.68,3.89L349.94,342a14.93,14.93,0,0,1-14.53,10.76l-257.86,0a15.15,15.15,0,0,1-15.14-15.13,15.38,15.38,0,0,1,.64-4.34c.08-.24,84.54-259.59,84.54-259.63,2-6.14,7.71-10.6,12.69-10.6,0,0,177.26,0,195.85,0h1.56a15.13,15.13,0,0,1,13.65,19.59Z"/>
                    </g>
                </g>
            </svg>
        </>

    );
}

function Logo() {
    return (
        <Link href='/'  className="inline-flex justify-center items-center">
      <span className="mr-2">
        <Icon/>
      </span>
            <span className="font-bold">ConnectAI</span>
        </Link>
    );
}

function  github() {
    return (
        <link href="https://github.com/wzh-1152195015/Intern-Diary" className="inline-flex justify-left items-left">
            <Icon/>
      </span>
            <span>Github</span>
        </Link>        
    );
}

export function Header() {
    return (
        <header className="p-8 flex justify-center">
            <Logo/>
        </header>
    );
}
