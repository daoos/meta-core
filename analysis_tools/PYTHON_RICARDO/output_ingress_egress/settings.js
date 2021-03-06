{
    "run_id" : "CAD_Master",
    "metrics_file" : "CADAssembly_metrics.xml",
    "path_to_instance_xmls" : "ComponentACMs",
    "path_to_instance_stls" : "STL_BINARY",
	"instance_file": "component_index.json",
    "output_json_file" : "output.json",
    "voxel_size" : 0.05,
    "max_collision_pct" : 10,
    "manikins_to_use" : ["50_standing", "50p_hunch1", "50p_hunch2", "50p_hunch3", "50p_hunch4",
                         "50p_hunch5", "50p_hunch5b", "50p_hunch6", "50p_hunch7", "50p_hunch8"],
    "manikin_orientations" : [0.0, 45.0, 90.0, 135.0, 180.0, 225.0, 270.0, 315.0],
    "show_2d" : true,
    "debug" : false,
    "manikin_poses" : {"50_standing": {"num": 1, "score": 1.0},
                 "50p_hunch1": {"num": 2, "score": 1.1},
                 "50p_hunch2": {"num": 3, "score": 1.2},
                 "50p_hunch3": {"num": 4, "score": 1.3},
                 "50p_hunch4": {"num": 5, "score": 1.5},
                 "50p_hunch5": {"num": 6, "score": 1.7},
                 "50p_hunch5b": {"num": 6, "score": 1.75},
                 "50p_hunch6": {"num": 7, "score": 1.9},
                 "50p_hunch7": {"num": 8, "score": 2.0},
                 "50p_hunch8": {"num": 9, "score": 2.2}}
}