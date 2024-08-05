const coauthors = {
    "Bin Tan": "https://icetttb.github.io/",
    "Yuxi Xiao": "https://henry123-boy.github.io/",
    "Liang Dong": "https://www.linkedin.com/in/liang-dong-4a435694/",
    "Gui-Song Xia": "http://www.captain-whu.com/xia_En.html",
    "Tianfu Wu": "https://research.ece.ncsu.edu/ivmcl/",
    "Yujun Shen": "https://shenyujun.github.io/"
}
const venues = {
    "CVPR": "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
    "ICCV": "IEEE International Conference on Computer Vision (ICCV)",
    "ECCV": "European Conference on Computer Vision (ECCV)",
}

function process_author_name(author_name){
    for (var i = 0; i < author_name.length; i++) {
        if (author_name[i] == " ") {
            author_name = author_name.slice(0,i) + "&nbsp;" + author_name.slice(i+1);
        }
    }
    return author_name;
}

function render_pub(
    project_name, 
    figure_path, 
    title_name, 
    author_list, 
    venue_name, 
    year, 
    material_list, 
    comments=null, 
    first_author=null, 
    corresponding_author=null,
    equal_contributions=false,
) {

    if (document.getElementsByName(project_name).length == 0) 
        return;

    var paper = document.getElementsByName(project_name)[0];
    var img = document.createElement("div");
    img.className = "img";
    img.innerHTML = "<img class='img_responsive' src=" + figure_path + ">";
    paper.appendChild(img);

    var paper_info = document.createElement("div");
    paper_info.className = "text";
    
    var title = document.createElement("div");
    title.className = "title";
    title.innerHTML = title_name;

    paper_info.appendChild(title);

    var authors = document.createElement("div");
    authors.className = "authors";
    authors.innerHTML = "";

    is_first_author = [];
    is_corresponding_author = []
    for (var i = 0; i < author_list.length; i++) {
        is_first_author.push(false);
        is_corresponding_author.push(false);
    }
    var num_first_author = 0;

    if (first_author != null) {
        for (var i = 0; i < first_author.length; i++) {
            is_first_author[first_author[i]] = true;
            num_first_author ++;
        }
    }
    else {
        is_first_author[0] = true;
        num_first_author ++;
    }

    if (corresponding_author != null) {
        for (var i = 0; i < corresponding_author.length; i++) {
            is_corresponding_author[corresponding_author[i]] = true;
        }
    }
    if (num_first_author == 2 && equal_contributions) {
        var random = Math.random();
        if (random > 0.5) {
            var temp = author_list[0];
            author_list[0] = author_list[1];
            author_list[1] = temp;
        }
    }


    for (var i = 0; i < author_list.length; i++) {
        var _author = author_list[i];
        // for (var j = 0; j < _author.length; j++) {
        //     if (_author[j] == " ") {
        //         _author = _author.slice(0,j) + "&nbsp;" + _author.slice(j+1);
        //     }
        // }
        var prefix = "";
        var author_ = document.createElement("span");
        debugger;

        if (_author == "Nan Xue") {
            author_.className = "author xn";
            author_.innerText = _author;
        }
        else{
            author_.className = "author";
            if (coauthors[_author] == null) {
                // prefix = "<span class='author'>";
                author_.innerHTML = process_author_name(_author);
            }
            else {
            author_.innerHTML = "<a href=" + coauthors[_author] + ">" + process_author_name(_author) + "</a>";
            }
        }
        if (is_first_author[i] && num_first_author > 1) {
            _author += "<sup>*</sup>";
            author_.innerHTML += "<sup>*</sup>";
        }
        if (is_corresponding_author[i]) {
            author_.innerHTML += "<sup>†</sup>";
        }
        if ( i != author_list.length -1) {
            author_.innerHTML += ", ";
        }
        // append a line break
        authors.appendChild(author_);

    }
    debugger;
    paper_info.appendChild(authors);

    var venue = document.createElement("div");
    venue.className = "journal";
    venue.innerHTML = "<span class='venue'>" + venue_name + "</span>, " + year;
    paper_info.appendChild(venue);

    var materials = document.createElement("div");
    materials.className = "materials";
    materials.innerHTML = "";
    for (var i = 0; i < material_list.length; i++) {
        materials.innerHTML += "<a href=" + material_list[i][1] + ">" + material_list[i][0] + "</a>";
        // debugger;
        if (i != material_list.length - 1) {
            materials.innerHTML += " / ";
        }
    }
    paper_info.appendChild(materials);

    if (comments != null) {
        var comments_div = document.createElement("div");
        comments_div.className = "remarks";
        comments_div.innerHTML = "<em>"+comments+"</em>";
        paper_info.appendChild(comments_div);
    }

    paper.appendChild(paper_info);
    
}


render_pub("NEAT", 
    "/assets/spotlights/neat-demo.gif", 
    title="NEAT: Distilling 3D Wireframes from Neural Attraction Fields", 
    author_list=["Nan Xue", "Bin Tan", "Yuxi Xiao", "Liang Dong", "Gui-Song Xia", "Tianfu Wu", "Yujun Shen"
    ], 
    venue_name="IEEE Conference on Computer Vision and Pattern Recognition (CVPR)", 
    year=2024,
    material_list=[
        ["arXiv", "https://arxiv.org/abs/2307.10206"],
        ["PDF", "/assets/papers/neat.pdf"],
        ["YouTube", "https://www.youtube.com/watch?v=qtBQYbOpVpc"],
        ["Code", "https://github.com/cherubicXN/neat"],
    ],
    comments="A neural 3D wireframe reconstruction approach without explicit line segment matching."
);

render_pub("SpatialTracker", 
    "/assets/spotlights/spatracker.gif", 
    title="SpatialTracker: Tracking Any 2D Pixels in 3D Space",
    author_list=[
        "Yuxi Xiao",
        "Qianqian Wang",
        "Shangzhan Zhang",
        "Nan Xue",
        "Sida Peng",
        "Yujun Shen",
        "Xiaowei Zhou",
    ], 
    venue_name="IEEE Conference on Computer Vision and Pattern Recognition (CVPR)", 
    year=2024,
    material_list=[
        ["arXiv", "https://arxiv.org/abs/2404.04319"],
        ["Project", "https://henry123-boy.github.io/SpaTracker/"],
        ["Code", "https://henry123-boy.github.io/SpaTracker/"],
    ],
    comments = "Highlight Presentation",
    first_author=[0,1],
    corresponding_author=[5,6],
);

render_pub("SAGE", 
    "/assets/spotlights/sage.png", 
    title="Stratified Avatar Generation from Sparse Observations",
    author_list=[
        "Han Feng",
        "Wenchao Ma",
        "Quankai Gao",
        "Xianwei Zheng",
        "Nan Xue",
        "Huijuan Xu"
    ], 
    venue_name="IEEE Conference on Computer Vision and Pattern Recognition (CVPR)", 
    year=2024,
    material_list=[
        ["arXiv", "https://arxiv.org/abs/2405.20786"],
        ["Project", "https://fhan235.github.io/SAGENet/"],
        ["YouTube", "https://www.youtube.com/watch?v=RkXaxyv1TOU"],
        ["Code", "https://github.com/Wenchao-M/SAGE"],
    ],
    comments = "Oral Presentation",
    first_author=[0,1],
    corresponding_author=[4],
    equal_contributions=true,
);

render_pub("MvaCon", 
    "/assets/spotlights/mvacon.png", 
    title="Multi-View Attentive Contextualization for Multi-View 3D Object Detection",
    author_list=[
        "Xianpeng Liu",
        "Ce Zheng",
        "Ming Qian",
        "Nan Xue",
        "Chen Chen",
        "Zhebin Zhang",
        "Chen Li",
        "Tianfu Wu"
    ], 
    venue_name="IEEE Conference on Computer Vision and Pattern Recognition (CVPR)", 
    year=2024,
    material_list=[
        ["arXiv", "https://arxiv.org/abs/2405.12200"],
        ["Project", "https://xianpeng919.github.io/mvacon/"],
    ],
    comments = "A simple yet effective method for improving 2D-to-3D feature lifting in query-based multi-view 3D (MV3D) object detection.",
    first_author=[0],
    corresponding_author=[7],
);

render_pub("NOPE-SAC", 
    "/assets/spotlights/nopesac.png", 
    title="NOPE-SAC: Neural One-Plane RANSAC for Sparse-View Planar 3D Reconstruction",
    author_list=[
        "Bin Tan",
        "Nan Xue",
        "Tianfu Wu",
        "Gui-Song Xia",
    ], 
    venue_name="IEEE Trans. on Pattern Analysis and Machine Intelligence (TPAMI)", 
    year=2023,
    material_list=[
        ["arXiv", "https://arxiv.org/abs/2211.16799"],
        ["IEEE Xplore", "https://ieeexplore.ieee.org/document/10247631"],
        ["Code", "https://github.com/IceTTTb/NopeSAC"],
    ],
    comments = null,
    first_author=[0],
    corresponding_author=[1],
);

render_pub("HAWPv3", 
    "/assets/spotlights/hawpv3.jpg", 
    title="Holistically-Attracted Wireframe Parsing: From Supervised to Self-Supervised Learning",
    author_list=[
        "Nan Xue",
        "Tianfu Wu",
        "Song Bai",
        "Fudong Wang",
        "Gui-Song Xia",
        "Liangpei Zhang",
        "Philip H.S. Torr",
    ], 
    venue_name="IEEE Trans. on Pattern Analysis and Machine Intelligence (TPAMI)", 
    year=2023,
    material_list=[
        ["arXiv", "https://arxiv.org/abs/2210.12971"],
        ["IEEE Xplore", "https://ieeexplore.ieee.org/document/10243120"],
        ["Code", "https://github.com/cherubicXN/hawp"],
    ],
    comments = null,
    first_author=[0],
    corresponding_author= null,
);

render_pub("Sat2Density", 
    "/assets/spotlights/sat2density-teaser.gif", 
    title="Sat2Density: Faithful Density Learning from Satellite-Ground Image Pairs",
    author_list=[
        "Min Qian",
        "Jincheng Xiong",
        "Gui-Song Xia",
        "Nan Xue",
    ], 
    venue_name="IEEE/CVF International Conference on Computer Vision (ICCV)", 
    year=2023,
    material_list=[
        ["arXiv", "https://arxiv.org/abs/2303.14672"],
        ["Code", "https://github.com/qianmingduowan/Sat2Density"],
    ],
    comments = null,
    first_author=[0],
    corresponding_author= [3],
);

render_pub("LevelS2fM",
    "/assets/spotlights/levels2fm.gif",
    title="Level-S<sup>2</sup>fM: Structure from Motion on Neural Level Set of Implicit Surfaces",
    author_list=[
        "Yuxi Xiao",
        "Nan Xue",
        "Tianfu Wu",
        "Gui-Song Xia",
    ],
    venue_name="IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
    year=2023,
    material_list=[
        ["arXiv", "https://arxiv.org/abs/2211.12018"],
        ["Project", "https://henry123-boy.github.io/level-s2fm/"],
        ["Code", "https://github.com/henry123-boy/Level-S2FM_official"],
    ],
    comments = null,
    first_author=[0],
    corresponding_author=[1],
)

render_pub("HiSup",
    "/assets/spotlights/hisup.png",
    title="HiSup: Accurate Polygonal Mapping of Buildings in Satellite Imagery with Hierarchical Supervision",
    author_list=[
        "Bowen Xu",
        "Jiakun Xu",
        "Nan Xue",
        "Gui-Song Xia",
    ],
    venue_name="ISPRS Journal of Photogrammetry and Remote Sensing",
    year=2023,
    material_list=[
        ["arXiv", "https://arxiv.org/abs/2208.00609"],
        ["Code", "https://github.com/SarahwXU/HiSup"],
    ],
    comments = null,
    first_author=[0,1],
    corresponding_author=[2,3],
)

render_pub("How3D",
    "/assets/spotlights/how3d.gif",
    title="HoW-3D: Holistic 3D Wireframe Perception from a Single Image",
    author_list=[
        "Wenchao Ma",
        "Bin Tan",
        "Nan Xue",
        "Tianfu Wu",
        "Xianwei Zheng",
        "Gui-Song Xia"
    ],
    venue_name="IEEE International Conference on 3D Vision (3DV)",
    year=2022,
    material_list=[
        ["arXiv", "https://arxiv.org/abs/2208.06999"],
        ["Code", "https://github.com/Wenchao-M/HoW-3D"],
        ["Dataset","https://drive.google.com/file/d/1NPNq4JDvV5p9Kli1acUZP05uzgKnrjUg/view"],
        ["YouTube","https://www.youtube.com/watch?v=27EEcG-LnJM"]
    ],
    comments = null,
    first_author=[0],
    corresponding_author=[2],
)

render_pub("Dewarp-Doc",
    "/assets/spotlights/dewarp.png",
    title="Revisiting Document Image Dewarping by Grid Regularization",
    author_list=[
        "Xiangwei Jiang", 
        "Rujiao Long", 
        "Nan Xue", 
        "Zhibo Yang", 
        "Cong Yao", 
        "Gui-Song Xia"
    ],
    venue_name="IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
    year=2022,
    material_list=[
        ["arXiv", "https://arxiv.org/abs/2203.16850"],
        ["Code", "https://github.com/XiangWeiJiang/Document_Geometry_Dewarping"]
    ],
    comments = null,
    first_author=[0],
)
render_pub("ZegFormer",
    "/assets/spotlights/zegformer.png",
    title="Decoupling Zero-Shot Semantic Segmentation",
    author_list=[
        "Jian Ding",
        "Nan Xue",
        "Gui-Song Xia",
        "Dengxin Dai"
    ],
    venue_name="IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
    year=2022,
    material_list=[
        ["arXiv", "https://arxiv.org/abs/2112.07910"],
        ["Code", "https://github.com/dingjiansw101/ZegFormer"]
    ],
)

render_pub("LOGOCAP",
    "/assets/spotlights/logocap.png",
    title="Learning Local-Global Contextual Adaptation for Multi-Person Pose Estimation",
    author_list=[
        "Nan Xue",
        "Tianfu Wu",
        "Gui-Song Xia",
        "Liangpei Zhang",
    ],
    venue_name="IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
    year=2022,
    material_list=[
        ["arXiv", "https://arxiv.org/abs/2109.03622"],
        ["Code", "https://github.com/cherubicXN/logocap"],
    ],
    comments = null,
    first_author=[0],
    corresponding_author=[1],
)

render_pub("PWNet",
    "/assets/spotlights/PWNet-iclr22.png",
    title="Partial Wasserstein Adversarial Network for Non-rigid Point Set Registration",
    author_list=[
        "Ziming Wang",
        "Nan Xue",
        "Ling Lei",
        "Gui-Song Xia",
    ],
    venue_name="International Conference on Learning Representations (ICLR)",
    year=2022,
    material_list=[
        ["arXiv", "https://arxiv.org/abs/2108.13196"],
        ["Code", "https://github.com/wzm2256/PWAN"],
    ],
)

render_pub("Monocon",
    "/assets/spotlights/monocon-aaai22.png",
    title="Learning Auxiliary Monocular Contexts Helps Monocular 3D Object Detection",
    author_list=[
        "Xianpeng Liu",
        "Nan Xue",
        "Tianfu Wu",
    ],
    venue_name="AAAI Conference on Artificial Intelligence (AAAI)",
    year=2022,
    material_list=[
        ["arXiv", "https://arxiv.org/abs/2112.04628"],
        ["Code", "https://github.com/Xianpeng919/MonoCon"],
    ],
)

render_pub("DOTA-PAMI",
    "/assets/spotlights/odai.png",
    title="Object Detection in Aerial Images: A Large-Scale Benchmark and Challenges",
    author_list=[
        "Jian Ding",
        "Nan Xue", 
        "Gui-Song Xia", 
        "Xiang Bai", 
        "Wen Yang", 
        "Michael Ying Yang", 
        "Serge Belongie", 
        "Jiebo Luo", 
        "Mihai Datcu", 
        "Marcello Pelillo", 
        "Liangpei Zhang"
    ],
    venue_name="IEEE Trans. on Pattern Analysis and Machine Intelligence (TPAMI)",
    year=2021,
    material_list=[
        ["Paper", "https://ieeexplore.ieee.org/document/9560031"],
    ],
)

render_pub("PlaneTR",
    "/assets/spotlights/planetr-iccv21.png",
    title_name="PlaneTR: Structure-Guided Transformers for 3D Plane Recovery",
    author_list=[
        "Bin Tan",
        "Nan Xue",
        "Song Bai",
        "Tianfu Wu",
        "Gui-Song Xia"
    ],
    venue_name="IEEE International Conference on Computer Vision (ICCV)",
    year=2021,
    material_list=[
        ["arXiv", "https://arxiv.org/abs/2107.13108"],
        ["Code", "http://git.io/PlaneTR"],
    ],
    comments=null,
    first_author=[0,1],
)


render_pub("CATS",
    "/assets/spotlights/CATS.png",
    title_name="Unmixing Convolutional Features for Crisp Edge Detection",
    author_list=[
        "Linxi Huan",
        "Nan Xue", 
        "Xianwei Zheng", 
        "Wei He", 
        "Jianya Gong", 
        "Gui-Song Xia"
    ],
    venue_name="IEEE Trans. on Pattern Analysis and Machine Intelligence (TPAMI)",
    year=2021,
    material_list=[
        ["arXiv", "https://arxiv.org/abs/2011.09808"],
        ["IEEEXplore","https://ieeexplore.ieee.org/document/9442882"],
        ["Code","https://github.com/WHUHLX/CATS"],
    ],
    comments=null,
    first_author=[0,1],
    corresponding_author=[2],
)

render_pub("AFM-PAMI",
    "/assets/spotlights/afm++.png",
    title_name="Learning Regional Attraction for Line Segment Detection",
    author_list=[
        "Nan Xue", 
        "Song Bai", 
        "Fudong Wang", 
        "Tianfu Wu", 
        "Gui-Song Xia", 
        "Liangpei Zhang", 
        "Philip H.S. Torr"
    ],
    venue_name="IEEE Trans. on Pattern Analysis and Machine Intelligence (TPAMI)",
    year=2021,
    material_list=[
        ["arXiv", "https://arxiv.org/pdf/1912.09344"],
        ["IEEEXplore", "https://ieeexplore.ieee.org/abstract/document/8930083"],
        ["Project", "https://cherubicxn.github.io/afmplusplus"],
    ],

)

render_pub("DeepGM",
    "/assets/spotlights/DeepGM.png",
    title_name="Deep Graph Matching under Quadratic Constraint",
    author_list=[
        "Quankai Gao", 
        "Fudong Wang", 
        "Nan Xue", 
        "Jin-Gang Yu", 
        "Gui-Song Xia",
    ],
    venue_name="IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
    year=2021,
    material_list=[
        ["arXiv","https://arxiv.org/abs/2103.06643"],
        ["Code","https://github.com/Zerg-Overmind/QC-DGM"],
    ]
)

render_pub("FRGM-PAMI",
    "/assets/spotlights/frgm.png",
    title_name="A Functional Representation for Graph Matching",
    author_list=[
        "Fudong Wang", 
        "Nan Xue", 
        "Yipeng Zhang", 
        "Gui-Song Xia", 
        "Marcello Pelillo"
    ],
    venue_name="IEEE Trans. on Pattern Analysis and Machine Intelligence (TPAMI)",
    year=2020,
    material_list=[
        ["arXiv","https://arxiv.org/abs/1901.05179"],
        ["IEEEXplore","https://ieeexplore.ieee.org/document/8723156"],
        ["Code","https://github.com/wangfudong/FRGM"],
    ]
)

render_pub("HAWP",
    "/assets/spotlights/hawp.png",
    title_name="Holistically-Attracted Wireframe Parsing",
    author_list=[
        "Nan Xue", 
        "Tianfu Wu", 
        "Song Bai", 
        "Fudong Wang", 
        "Gui-Song Xia", 
        "Liangpei Zhang", 
        "Philip H.S. Torr"
    ],
    venue_name="IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
    year=2020,
    material_list=[
        ["arXiv", "https://arxiv.org/pdf/2003.01663.pdf"],
        ["Paper", "https://openaccess.thecvf.com/content_CVPR_2020/papers/Xue_Holistically-Attracted_Wireframe_Parsing_CVPR_2020_paper.pdf"],
        ["Code","https://github.com/cherubicXN/hawp/tree/master"]
    ]
)

render_pub("ZAC",
    "/assets/spotlights/zac.png",
    title_name="Zero-Assignment Constraint for Graph Matching with Outliers",
    author_list=[
        "Fudong Wang", 
        "Nan Xue", 
        "Jin-Gang Yu",
        "Gui-Song Xia",
    ],
    venue_name="IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
    year=2020,
    material_list=[
        ["arXiv", "https://arxiv.org/pdf/2003.11928"],
        ["Code", "https://github.com/wangfudong/ZAC_GM"],
    ],
)

render_pub("AFM",
    "/assets/spotlights/afm.png",
    title_name="Learning Attraction Field Representation for Robust Line Segment Detection",
    author_list=[
        "Nan Xue", 
        "Song Bai", 
        "Fudong Wang", 
        "Tianfu Wu", 
        "Gui-Song Xia", 
        "Liangpei Zhang", 
    ],
    venue_name="IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
    year=2019,
    material_list=[
        ["arXiv", "http://arxiv.org/abs/1812.02122"],
        ["Paper", "https://openaccess.thecvf.com/content_CVPR_2019/papers/Xue_Learning_Attraction_Field_Representation_for_Robust_Line_Segment_Detection_CVPR_2019_paper.pdf"],
        ["Code","https://github.com/cherubicXN/afm_cvpr2019"],
    ]
)

render_pub("Fisheye-Calibration",
    "/assets/spotlights/fisheye.png",
    title_name="Learning to Calibrate Straight Lines for Fisheye Image Rectification",
    author_list=[
        "Zhu-Cun Xue",
        "Nan Xue", 
        "Gui-Song Xia", 
        "Weiming Shen",
    ],
    venue_name="IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
    year=2019,
    material_list=[
        ["Paper", "http://openaccess.thecvf.com/content_CVPR_2019/papers/Xue_Learning_to_Calibrate_Straight_Lines_for_Fisheye_Image_Rectification_CVPR_2019_paper.pdf"],
    ]
)

render_pub("RoITransformer",
    "/assets/spotlights/roitrans.png",
    title_name="Learning RoI Transformer for Detecting Oriented Objects in Aerial Images",
    author_list=[
        "Jian Ding", 
        "Nan Xue", 
        "Yang Long", 
        "Gui-Song Xia", 
        "Qikai Lu"
    ],
    venue_name="IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
    year=2019,
    material_list=[
        ["arXiv", "https://arxiv.org/abs/1905.03304"],
        ["Code", "https://github.com/dingjiansw101/AerialDetection"],
    ]
)


render_pub("ATGM",
    "/assets/spotlights/atgm.png",
    title_name="Adaptively Transforming Graph Matching",
    author_list=[
        "Fudong Wang", 
        "Nan Xue", 
        "Yipeng Zhang", 
        "Xiang Bai", 
        "Gui-Song Xia"
    ],
    venue_name=venues["ECCV"],
    year=2018,
    material_list=[
        ["arXiv", "https://arxiv.org/abs/1807.10160"],
    ],
)

render_pub("ASJ",
    "/assets/spotlights/asj.png",
    title_name="Anisotropic-Scale Junction Detection and Matching for Indoor Images",
    author_list=[
        "Nan Xue", 
        "Gui-Song Xia", 
        "Xiang Bai", 
        "Liangpei Zhang", 
        "Weiming Shen",
    ],
    venue_name="IEEE Trans. on Image Processing (TIP)",
    year=2018,
    material_list=[
        ["arXiv", "https://arxiv.org/abs/1703.05630"],
        ["IEEEXplore", "http://ieeexplore.ieee.org/document/8047303/"],
        ["Code", "https://github.com/cherubicXN/anisotropic-scale-junction-detector"],
    ],
)