const LANG_FOLDER_NAME = "./";

export const WORKPLACES = [<img src="./bosch.png" alt="Robert Bosch GMBH"/>, "2019-2020", "Developer"];
export const EDUCATIONS = [<img src="./sigla_utcluj_white.svg" alt="UTCN"/>, "In Progress", "Computer Science"];

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

export const REEL = {
    images: [
        <img src="./bannervid.gif" alt=""/>
    ]
};

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
        <img src="./projects/sword/r1.webp" alt="sword1"/>,
        <img src="./projects/sword/r2.webp" alt="sword2"/>,
    ],
    description: "Created and rendered in Blender, this projects purpose was to use volumetric effects and model the sword by myself, create materials while also using existent PBR ones"
},{
    title: "Robot Arm",
    images: [
        <img src="./projects/roboarm/roboarm.gif" alt="robot arm"/>
    ],
    description: "This is one of my first projects in Blender in which I modelled the arm parts and applied inverse kinematics on the armature."
},{
    title: "Wooden Board with Food",
    images: [
        <img src="./projects/plate/r1.webp" alt="food2"/>,
        <img src="./projects/plate/r2.1.webp" alt="food2.1"/>,
        <img src="./projects/plate/r2.2.webp" alt="food2.2"/>,
        <img src="./projects/plate/r3.webp" alt="food3"/>,
    ],
    description: "One of my latest projects in Blender, in which I am making high use of existent PBR materials while modelling almost everything by hand, using on most assets non-destructive geometry techniques."
},{
    title: "Portal Stones",
    images: [
        <img src="./projects/portal/i1.webp" alt="portal1"/>,
        <img src="./projects/portal/i2.webp" alt="portal2"/>,
        <img src="./projects/portal/i3.webp" alt="portal3"/>,
        <img src="./projects/portal/i4.webp" alt="portal4"/>,
        <img src="./projects/portal/i5.webp" alt="portal5"/>,
        <img src="./projects/portal/i6.webp" alt="portal6"/>,
        <img src="./projects/portal/i7.webp" alt="portal7"/>,
        <img src="./projects/portal/i8.webp" alt="portal8"/>,
        <img src="./projects/portal/i9.webp" alt="portal9"/>,
        <img src="./projects/portal/i10.webp" alt="portal10"/>,
    ],
    description: "A Blender project started from zero with minimum usage of existent PBR materials (only for the stone effect) while the rest of the maps are baked after hand-sculting the objects. The final result is rendered in Unreal engine 4, with the foliage imported from megascans library."
},{
    title: "Jewellery box",
    images: [
        <img src="./projects/jewellery/r1.webp" alt="box1"/>,
        <img src="./projects/jewellery/r2.webp" alt="box2"/>,
        <img src="./projects/jewellery/r2.1.webp" alt="box3"/>
    ],
    description: "A Blender project representing a modular product, using PBR materials."
},{
    title: "Motorcycle Helmet",
    images: [
        <img src="./projects/motorcyclehelmet/m1.webp" alt="helmet"/>
    ],
    description: "A Blender project, rendered in Unreal Engine 4. The model parts are modelled by myself and I applied the automotive materials from Unreal Engine."
},{
    title: "Cash Envelopes",
    images: [
        <img src="./projects/envelopes/r1.webp" alt="envelope1"/>,
    ],
    description: "A Blender project in which I modelled the real product representation from and with provided image references."
},{
    title: "Icarus Candle",
    images: [
        <img src="./projects/icarus/r1.webp" alt="icarus1"/>,
        <img src="./projects/icarus/r1.1.webp" alt="icarus2"/>
    ],
    description: "A Blender render with a model sculpted and exported from zBrush. The concept was part of a human male body anatomy study."
}
]
