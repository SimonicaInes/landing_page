const LANG_FOLDER_NAME = "./";

export const WORKPLACES = ["bosch img", "20xx-20xx", "nume"];
export const EDUCATIONS = ["utcn img", "In Progress", "nume"];

export const LEVELS = [{
    level: "Basic",
    alternative: <img className="language-level-img" src={LANG_FOLDER_NAME + "levels/low.png"} alt="v"/>
}, {
    level: "Intermediate",
    alternative: <img className="language-level-img" src={LANG_FOLDER_NAME + "levels/tilda.png"} alt="~"/>
}, { 
    level: "Advanced",
    alternative: <img className="language-level-img" src={LANG_FOLDER_NAME + "levels/high.png"} alt="^"/>
}, {
    level: "Proficient",
    alternative: <img className="language-level-img" src={LANG_FOLDER_NAME + "levels/star.png"} alt="+"/>
}];

export const LANGUAGES_PROFICIENCIES = [{
    skill: "english",
    alternative: <img className="language-flag-img" src={LANG_FOLDER_NAME + "languages/en.png"} alt="EN"/>,
    proficiency: "90%"
},{
    skill: "french",
    alternative: <img className="language-flag-img" src={LANG_FOLDER_NAME + "languages/fr.png"} alt="FR"/>,
    proficiency: "22%"
},{
    skill: "romanian",
    alternative: <img className="language-flag-img" src={LANG_FOLDER_NAME + "languages/ro.png"} alt="RO"/>,
    proficiency: "100%"
}];

export const SKILLS_PROFICIENCIES = [{
    skill: "blender",
    alternative: <img className="language-flag-img" src={LANG_FOLDER_NAME + "languages/en.png"} alt="EN"/>,
    proficiency: "73%"
},{
    skill: "Unreal Engine",
    alternative: <img className="language-flag-img" src={LANG_FOLDER_NAME + "languages/fr.png"} alt="FR"/>,
    proficiency: "60%"
},{
    skill: "Unity",
    alternative: <img className="language-flag-img" src={LANG_FOLDER_NAME + "languages/ro.png"} alt="RO"/>,
    proficiency: "35%"
},{
    skill: "C#",
    alternative: <img className="language-flag-img" src={LANG_FOLDER_NAME + "languages/ro.png"} alt="RO"/>,
    proficiency: "30%"
},{
    skill: "zbrush",
    alternative: <img className="language-flag-img" src={LANG_FOLDER_NAME + "languages/ro.png"} alt="RO"/>,
    proficiency: "25%"
},{
    skill: "photoshop",
    alternative: <img className="language-flag-img" src={LANG_FOLDER_NAME + "languages/ro.png"} alt="RO"/>,
    proficiency: "48%"
},{
    skill: "substance",
    alternative: <img className="language-flag-img" src={LANG_FOLDER_NAME + "languages/ro.png"} alt="RO"/>,
    proficiency: "20%"
},{
    skill: "aseprite",
    alternative: <img className="language-flag-img" src={LANG_FOLDER_NAME + "languages/ro.png"} alt="RO"/>,
    proficiency: "55%"
},{
    skill: "figma",
    alternative: <img className="language-flag-img" src={LANG_FOLDER_NAME + "languages/ro.png"} alt="RO"/>,
    proficiency: "70%"
}];

export const PROJECTS = [{
    title: "Magic Sword in Stone",
    images: [
        <img src="./projects/sword/r1.png" alt="sword1"/>,
        <img src="./projects/sword/r2.png" alt="sword2"/>,
    ],
    description: "lorem ipsum"
},{
    title: "Robot Arm",
    images: [
        <video width="75%" height="100%" controls>
            <source src="./projects/roboarm/roboarm.mp4" type="video/mp4"/>
        </video>
    ],
    description: "lorem ipsum dolor"
},{
    title: "Wooden Board with Food",
    images: [
        <img src="./projects/plate/r1.png" alt="food2"/>,
        <img src="./projects/plate/r2.1.png" alt="food2.1"/>,
        <img src="./projects/plate/r2.2.png" alt="food2.2"/>,
        <img src="./projects/plate/r3.png" alt="food3"/>,
    ],
    description: "lorem ipsum dolor"
},{
    title: "Portal Stones",
    images: [
        <img src="./projects/portal/i1.png" alt="portal1"/>,
        <img src="./projects/portal/i2.png" alt="portal2"/>,
        <img src="./projects/portal/i3.png" alt="portal3"/>,
        <img src="./projects/portal/i4.png" alt="portal4"/>,
        <img src="./projects/portal/i5.png" alt="portal5"/>,
        <img src="./projects/portal/i6.png" alt="portal6"/>,
        <img src="./projects/portal/i7.png" alt="portal7"/>,
        <img src="./projects/portal/i8.png" alt="portal8"/>,
        <img src="./projects/portal/i9.png" alt="portal9"/>,
        <img src="./projects/portal/i10.png" alt="portal10"/>,
    ],
    description: "lorem ipsum dolor"
},{
    title: "Jewellery box",
    images: [
        <img src="./projects/jewellery/r1.png" alt="box1"/>,
        <img src="./projects/jewellery/r2.png" alt="box2"/>,
        <img src="./projects/jewellery/r2.1.jpg" alt="box3"/>
    ],
    description: "lorem ipsum dolor"
},{
    title: "Motorcycle Helmet",
    images: [
        <img src="./projects/motorcyclehelmet/m1.png" alt="helmet"/>
    ],
    description: "lorem ipsum dolor"
},{
    title: "Cash Envelopes",
    images: [
        <img src="./projects/envelopes/r1.png" alt="envelope1"/>,
        <img src="./projects/envelopes/r2.png" alt="envelope2"/>
    ],
    description: "lorem ipsum dolor"
},{
    title: "Icarus Candle",
    images: [
        <img src="./projects/icarus/r1.png" alt="icarus1"/>,
        <img src="./projects/icarus/r1.1.png" alt="icarus2"/>
    ],
    description: "lorem ipsum dolor"
}
]
