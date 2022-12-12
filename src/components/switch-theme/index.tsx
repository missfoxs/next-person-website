import { useState } from 'react';

function LightMode() {
    return (
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2877" width="20" height="20">
            <path
                d="M519.539208 791.717679c-155.639756 0-282.253432-126.608559-282.253432-282.233989 0-155.627477 126.613676-282.240129 282.253432-282.240129 155.639756 0 282.253432 126.613676 282.253432 282.240129C801.792641 665.10912 675.178965 791.717679 519.539208 791.717679zM519.539208 280.58135c-126.222773 0-228.915643 102.679567-228.915643 228.90234s102.69287 228.895177 228.915643 228.895177c126.223796 0 228.915643-102.672404 228.915643-228.895177S645.763005 280.58135 519.539208 280.58135z"
                p-id="2878"
                fill="#ffffff"
            ></path>
            <path
                d="M373.274984 424.943248c-2.317789 0-4.662183-0.598634-6.797823-1.861394-6.329149-3.76372-8.4126-11.94096-4.662183-18.283412 27.606755-46.515407 78.341253-75.410504 132.395356-75.410504 7.369851 0 13.33368 5.963829 13.33368 13.334703s-5.963829 13.334703-13.33368 13.334703c-44.691875 0-86.636173 23.896246-109.450784 62.362326C382.260635 422.61318 377.832789 424.943248 373.274984 424.943248z"
                p-id="2879"
                fill="#ffffff"
            ></path>
            <path
                d="M353.651041 491.721141c-7.370875 0-13.334703-5.963829-13.334703-13.334703 0-12.43624 1.458211-19.259646 4.050246-30.263258 1.680269-7.175423 8.972349-11.576663 16.031115-9.93528 7.175423 1.692548 11.615549 8.867972 9.93528 16.030092-2.317789 9.870812-3.347235 14.624069-3.347235 24.169469C366.985744 485.757313 361.021915 491.721141 353.651041 491.721141z"
                p-id="2880"
                fill="#ffffff"
            ></path>
            <path
                d="M530.268574 958.712041c-14.728446 0-26.669406-11.954263-26.669406-26.669406l0-80.008218c0-14.740726 11.94096-26.669406 26.669406-26.669406s26.669406 11.927657 26.669406 26.669406l0 80.008218C556.939003 946.758802 544.99702 958.712041 530.268574 958.712041z"
                p-id="2881"
                fill="#ffffff"
            ></path>
            <path
                d="M530.268574 198.632943c-14.728446 0-26.669406-11.94096-26.669406-26.669406L503.599168 91.956342c0-14.728446 11.94096-26.669406 26.669406-26.669406s26.669406 11.94096 26.669406 26.669406l0 80.007195C556.939003 186.691983 544.99702 198.632943 530.268574 198.632943z"
                p-id="2882"
                fill="#ffffff"
            ></path>
            <path
                d="M221.658867 833.153394c-6.823406 0-13.646811-2.604314-18.856463-7.812943-10.417257-10.41828-10.417257-27.294646 0-37.712927l56.568367-56.567343c10.417257-10.41828 27.294646-10.41828 37.711903 0 10.417257 10.417257 10.417257 27.293623 0 37.712927l-56.568367 56.567343C235.306702 830.54908 228.482273 833.153394 221.658867 833.153394z"
                p-id="2883"
                fill="#ffffff"
            ></path>
            <path
                d="M759.105423 295.712979c-6.823406 0-13.646811-2.604314-18.85544-7.812943-10.41828-10.41828-10.41828-27.294646 0-37.711903l56.567343-56.568367c10.41828-10.417257 27.294646-10.417257 37.712927 0 10.417257 10.41828 10.417257 27.294646 0 37.711903l-56.567343 56.568367C772.753257 293.108664 765.929852 295.712979 759.105423 295.712979z"
                p-id="2884"
                fill="#ffffff"
            ></path>
            <path
                d="M278.227234 295.712979c-6.823406 0-13.646811-2.604314-18.85544-7.812943l-56.568367-56.568367c-10.417257-10.417257-10.417257-27.293623 0-37.711903 10.41828-10.417257 27.294646-10.417257 37.711903 0l56.568367 56.568367c10.417257 10.417257 10.417257 27.293623 0 37.711903C291.874045 293.108664 285.05064 295.712979 278.227234 295.712979z"
                p-id="2885"
                fill="#ffffff"
            ></path>
            <path
                d="M815.674812 833.178977c-6.824429 0-13.647835-2.604314-18.856463-7.812943l-56.567343-56.593949c-10.41828-10.419304-10.41828-27.29567 0-37.712927 10.417257-10.41828 27.293623-10.41828 37.712927 0l56.567343 56.593949c10.417257 10.41828 10.417257 27.294646 0 37.712927C829.322647 830.574662 822.498218 833.178977 815.674812 833.178977z"
                p-id="2886"
                fill="#ffffff"
            ></path>
            <path
                d="M171.967118 545.332153l-80.008218 0c-14.728446 0-26.669406-11.94096-26.669406-26.669406s11.94096-26.669406 26.669406-26.669406l80.008218 0c14.728446 0 26.669406 11.94096 26.669406 26.669406S186.694541 545.332153 171.967118 545.332153z"
                p-id="2887"
                fill="#ffffff"
            ></path>
            <path
                d="M932.039054 545.332153l-80.008218 0c-14.728446 0-26.669406-11.94096-26.669406-26.669406s11.94096-26.669406 26.669406-26.669406l80.008218 0c14.728446 0 26.669406 11.94096 26.669406 26.669406S946.7675 545.332153 932.039054 545.332153z"
                p-id="2888"
                fill="#ffffff"
            ></path>
        </svg>
    );
}

function DarkMode() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em">
            <path d="M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
        </svg>
    );
}

export default function ChangeTheme() {
    const [mode, setMode] = useState(false);
    return (
        <span
            className="mx-4 cursor-pointer"
            onClick={() => {
                setMode(!mode);
                if (mode) {
                    document.documentElement.classList.remove('dark');
                } else {
                    document.documentElement.classList.add('dark');
                }
            }}
        >
            {mode ? <LightMode /> : <DarkMode />}
        </span>
    );
}