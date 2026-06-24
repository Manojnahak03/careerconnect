import Job from "../models/Job.js";

export const createJob = async (req,res) =>{
    try {
        const job  = await Job.create(req.body);

        res.status(201)
        .json({
            success:true,
            message:"Job Created Sucessfully !",
            job
        });
        
    } catch (error) {
        res.status(500)
        .json({
            success:false,
            message:"Failed to create job",
            error:error.message
        })
    }
};

export const getAllJob = async (req, res) => {
    try {
        const fetchJob = await Job.find();

        res.status(200).json({
            success: true,
            message: "Jobs Fetched Successfully!",
            jobs: fetchJob
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to get jobs",
            error: error.message
        });
    }
};

export const getSingleJob = async (req,res) =>{
    try {
        const job = await Job.findById(req.params.id);
        if(!job){
            return res.status(401)
            .json({
                success:false,
                message:"No Job Found",
                error:error.message
            })
        }
        res.status(200)
        .json({
            success:true,
            message:"Job Details Get Sucessfully !",
            job
        })  
    } catch (error) {
        res.status(500)
        .json({
            success:false,
            message:"Failed to View",
            error:error.message
        })
    }
};

export const updateJob = async (req,res) =>{
    try {
        const {id} = req.params;

        const updateJob = await Job.findByIdAndUpdate(
            id,
            req.body,
            {
                new:true,
                runValidators:true
            }
        );

        if(!updateJob){
            return res.status({
                success:false,
                message:"Job not Found",
            });
        }
        res.status(200)
        .json({
            success:true,
            message:"Job Update Sucessfully !"
        });
        
    } catch (error) {
        res.status(501)
        .json({
            success:false,
            message:"Failed to update in job !",
            error:message.error
        })
    }
};

export const deleteJob = async (req,res) =>{
    try {
        const {id} = req.params;
        const job = await Job.findByIdAndDelete(id);
        if(!job){
            return res.status(404)
            .json({
                success:false,
                message:"No Job Exist"
            })
        }
        res.status(200)
        .json({
            success:true,
            message:"Job Delete Sucessfully "
        })
    } catch (error) {
        res.status(501)
        .json({
            success:false,
            message:"Failed to delete the job",
            error:error.message
        })
    }
};

