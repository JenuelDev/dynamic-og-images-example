import { ImageResponse } from 'next/og';
export const runtime = 'edge';
import { NextRequest } from 'next/server';

const BackGroundSvg = () => (
    <svg
        style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.4
        }}
        width="1200"
        height="630"
        viewBox="0 0 1200 630"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M165.165 460.097C665.045 774.444 932.717 309.581 918.141 89.1189C903.565 -131.34 701.988 54.0219 229.207 -264.678C-5.12998 -422.28 -543.751 -34.9957 -529.152 185.807C-519.833 326.75 -379.035 310.245 -189.346 337.462C-81.376 352.603 41.2774 380.199 165.165 460.097Z"
            stroke="url(#paint0_linear_478_327)"
            stroke-opacity="0.6"
            stroke-width="0.5"
            stroke-miterlimit="10"
        />
        <path
            d="M253.011 -296.212C-18.3602 -425.405 -530.013 -54.3762 -514.515 180.017C-504.966 324.443 -367.006 331.248 -180.346 370.146C-63.9475 394.645 76.0485 423.818 211.397 491.726C726.056 747.075 976.158 317.568 960.661 83.175C951.203 -59.8718 860.843 -55.6582 684.504 -114.624C639.725 -129.318 584.825 -148.797 528.988 -171.418C423.425 -219.756 361.801 -244.206 253.011 -296.212Z"
            stroke="#4F46E5"
            stroke-width="0.5"
            stroke-miterlimit="10"
        />
        <path
            d="M241.66 -337.514C-103.895 -405.376 -551.492 -75.9573 -534.468 181.539C-524.622 330.451 -394.813 386.268 -215.436 445.381C-83.1503 488.912 81.5494 516.799 246.071 558.545C753.003 687.059 1028.73 337.499 1011.71 80.0029C1002.48 -59.6043 915.779 -101.995 758.671 -172.621C710.081 -194.336 657.576 -217.177 597.427 -239.514C493.439 -277.993 373.349 -311.253 241.66 -337.514Z"
            stroke="#4F46E5"
            stroke-width="0.5"
            stroke-miterlimit="10"
        />
        <path
            d="M240.293 -358.196C-144.815 -394.012 -562.594 -86.3041 -544.794 182.913C-534.789 334.241 -409.347 415.27 -231.557 483.492C-91.4727 537.239 84.2611 566.129 266.385 592.17C756.822 661.879 1062.29 347.399 1044.49 78.1815C1035.39 -59.3574 948.148 -126.639 798.389 -202.251C773.973 -214.535 748.415 -226.662 721.54 -238.425C692.847 -250.985 662.654 -263.13 630.749 -274.607C516.731 -315.537 383.742 -344.83 240.293 -358.196Z"
            stroke="url(#paint1_linear_478_327)"
            stroke-opacity="0.85"
            stroke-width="0.5"
            stroke-miterlimit="10"
        />
        <path
            d="M238.897 -379.222C-185.147 -381.999 -573.719 -96.9921 -555.167 183.599C-545.025 336.995 -424.446 443.964 -247.73 520.912C-100.36 585.258 87.1319 617.871 287.206 625.07C761.548 642.177 1096.34 356.574 1077.77 75.6354C1068.79 -60.1794 981.538 -152.388 838.603 -232.609C786.778 -261.728 728.54 -288.342 664.003 -310.734C540.018 -353.086 394.157 -378.061 238.897 -379.222Z"
            stroke="#64748B"
            stroke-width="0.5"
            stroke-miterlimit="10"
        />
        <path
            d="M304.478 659.679C767.441 629.07 1126.86 367.454 1107.53 75.1424C1098.66 -58.9484 1011.41 -176.084 875.294 -260.911C822.106 -294.094 761.022 -322.251 694.3 -344.498C559.737 -389.265 401.547 -409.965 234.487 -398.92C-228.482 -368.31 -587.892 -106.698 -568.565 185.614C-549.239 477.926 -158.492 690.289 304.478 659.679Z"
            stroke="#64748B"
            stroke-width="0.5"
            stroke-miterlimit="10"
        />
        <path
            d="M1136.98 75.5291C1127.93 -61.3215 1039.43 -180.798 899.927 -267.132C845.603 -300.931 783.383 -329.708 715.543 -352.227C578.185 -397.846 417.216 -419.057 246.334 -407.759C-225.912 -376.536 -592.647 -109.59 -572.933 188.582C-553.219 486.755 -154.531 703.093 317.715 671.87C789.961 640.647 1156.7 373.702 1136.98 75.5291V75.5291Z"
            stroke="#4F46E5"
            stroke-width="0.5"
            stroke-miterlimit="10"
        />
        <path
            d="M1162.9 77.6248C1153.69 -61.6382 1063.36 -183.766 921.562 -271.676C866.098 -306.095 802.742 -335.488 733.219 -358.587C593.608 -405.097 428.776 -426.744 254.613 -415.229C-226.91 -383.393 -600.972 -111.117 -580.87 192.916C-560.769 496.949 -154.116 717.607 327.407 685.77C808.936 653.933 1183 381.658 1162.9 77.6248V77.6248Z"
            stroke="#64748B"
            stroke-width="0.5"
            stroke-miterlimit="10"
        />
        <path
            d="M1189.35 79.6845C1179.96 -62.3349 1087.84 -186.77 943.191 -276.224C886.592 -311.255 822.095 -341.268 751.465 -364.643C609.052 -412.004 441.442 -434.159 264.01 -422.428C-226.801 -389.977 -607.659 -112.752 -587.17 197.141C-566.681 507.031 -152.64 731.701 338.171 699.25C828.978 666.8 1209.84 389.575 1189.35 79.6845V79.6845Z"
            stroke="#64748B"
            stroke-width="0.5"
            stroke-miterlimit="10"
        />
        <path
            d="M1215.81 81.7442C1206.23 -63.0351 1112.34 -189.426 965.374 -280.805C907.634 -316.455 842.002 -347.084 770.23 -371.075C625.022 -419.292 454.092 -441.918 273.379 -429.97C-226.709 -396.906 -614.893 -114.351 -594.016 201.403C-573.14 517.154 -151.135 746.146 348.954 713.082C849.042 680.018 1236.66 397.151 1215.81 81.7442Z"
            stroke="#64748B"
            stroke-width="0.5"
            stroke-miterlimit="10"
        />
        <path
            d="M1242.24 83.4565C1232.49 -64.0794 1136.79 -192.775 986.958 -286.041C928.082 -322.307 861.315 -353.556 787.878 -377.782C639.874 -426.852 466.188 -449.645 282.206 -437.481C-226.623 -403.839 -622.127 -115.95 -600.886 205.317C-579.645 526.584 -149.681 759.896 359.148 726.254C867.972 692.613 1263.5 405.071 1242.23 83.4569L1242.24 83.4565Z"
            stroke="#64748B"
            stroke-width="0.5"
            stroke-miterlimit="10"
        />
        <path
            d="M368.84 740.154C-149.474 774.423 -587.185 536.909 -608.823 209.651C-630.46 -117.607 -227.828 -410.682 290.485 -444.951C808.799 -479.22 1246.51 -241.705 1268.15 85.5525C1289.78 412.81 887.154 705.885 368.84 740.154Z"
            stroke="#64748B"
            stroke-width="0.5"
            stroke-miterlimit="10"
        />
        <defs>
            <linearGradient
                id="paint0_linear_478_327"
                x1="926.132"
                y1="81.2689"
                x2="-504.78"
                y2="175.875"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#64748B" />
                <stop offset="1" stop-color="#64748B" stop-opacity="0" />
            </linearGradient>
            <linearGradient
                id="paint1_linear_478_327"
                x1="1044"
                y1="70.8206"
                x2="-545.258"
                y2="175.896"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#64748B" />
                <stop offset="1" stop-color="#64748B" stop-opacity="0" />
            </linearGradient>
        </defs>
    </svg >)

export async function GET(params: NextRequest) {
    const title = params.nextUrl.searchParams.get('title') ?? '';
    const slug = params.nextUrl.searchParams.get('slug') ?? '';
    const description = params.nextUrl.searchParams.get('description') ?? '';
    const url = `jenuel.dev/blogs/${slug}`;

    // Set Font Buffer
    const getPoppinsFont = await fetch(
        new URL("/public/poppins/Poppins-Regular.ttf", import.meta.url)
    );
    const getPoppinsBoldFont = await fetch(
        new URL("/public/poppins/Poppins-Bold.ttf", import.meta.url)
    )

    if (!getPoppinsFont.ok || !getPoppinsBoldFont.ok) {
        throw new Error("Failed to fetch the font file");
    }

    const PoppinsFont = await getPoppinsFont.arrayBuffer();
    const PoppinsFontBold = await getPoppinsBoldFont.arrayBuffer();


    const ImageRender = () => (
        <div tw="w-full h-full bg-white flex justify-center items-center">
            <div tw="py-18 px-40 flex flex-col">
                <h1 tw={`${title.length > 30 ? "text-5xl" : "text-7xl"} m-0 text-center`} style={{ fontFamily: "PoppinsBold" }}>
                    {`"${title}"`}
                </h1>
                <div tw="text-4xl mb-15 text-center flex justify-center">
                    {`${description}`}
                </div>
                <div
                    style={{
                        fontSize: '25px',
                        fontWeight: 300,
                        margin: 0,
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <div tw="text-4xl" style={{ fontFamily: "PoppinsBold" }}>Jenuel</div>
                    <div tw="text-4xl" style={{ fontFamily: "PoppinsBold", color: "#688AFD" }}>Dev</div>
                </div>
            </div>
            <BackGroundSvg />
        </div>
    )



    return new ImageResponse(<ImageRender />,
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: 'Poppins',
                    data: PoppinsFont,
                    style: 'normal',
                },
                {
                    name: "PoppinsBold",
                    data: PoppinsFontBold,
                    style: "normal"
                }
            ]
        },
    );
}