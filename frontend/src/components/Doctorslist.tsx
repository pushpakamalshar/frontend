import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img1.png";
import img3 from "../assets/im3.jpg";
import { useAuth } from "../context/Authcontext";

const Doctorslist = () => {
  const auth = useAuth();
  const { isAuthenticated } = auth;
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const doctors = [
    {
      id: 1,
      name: "Dr. John Smith",
      speciality: "Cardiologist",
      hospital: "Grande Hospital",
      experience: "15 years",
      degree: "MD, Cardiology",
      img: { img3 },
      message:
        "Dr. John Smith is a seasoned Cardiologist with over 15 years of experience. He specializes in diagnosing and treating heart conditions, ensuring his patients receive the best possible care. His expertise spans everything from preventative cardiac care to advanced interventions. Dr. Smith believes in a holistic approach to heart health, focusing not only on medical treatment but also on lifestyle changes that promote long-term well-being.",
    },
    {
      id: 2,
      name: "Dr. Emily Davis",
      speciality: "Neurologist",
      hospital: "Mediciti Hospital",
      experience: "12 years",
      degree: "DM, Neurology",
      message:
        "Dr. Emily Davis is a highly skilled Neurologist with 12 years of experience in diagnosing and treating neurological disorders. She has worked with patients suffering from conditions such as epilepsy, multiple sclerosis, and Parkinson’s disease. Dr. Davis is dedicated to providing comprehensive care, helping her patients manage symptoms and improve their quality of life.",
    },
    {
      id: 3,
      name: "Dr. Michael Johnson",
      speciality: "Orthopedic Surgeon",
      hospital: "KMC Hospital",
      experience: "10 years",
      degree: "MS, Orthopedics",
      message:
        "Dr. Michael Johnson is an experienced Orthopedic Surgeon with a focus on bone and joint health. With 10 years of experience, he specializes in treating musculoskeletal disorders and performing surgeries that restore mobility. Dr. Johnson believes in providing tailored treatment plans that ensure his patients recover effectively and regain their strength.",
    },
    {
      id: 4,
      name: "Dr. Sarah Brown",
      speciality: "Pediatrician",
      hospital: "Teaching Hospital",
      experience: "8 years",
      degree: "MD, Pediatrics",
      message:
        "Dr. Sarah Brown is a compassionate Pediatrician with 8 years of experience. She is committed to ensuring children receive the best care from birth through adolescence. Dr. Brown focuses on monitoring growth and development, and she works closely with parents to address concerns and guide them through health milestones. Her goal is to foster a positive, trusting relationship with both children and their families.",
    },
    {
      id: 5,
      name: "Dr. William Lee",
      speciality: "Dermatologist",
      hospital: "Grande Hospital",
      experience: "9 years",
      degree: "MD, Dermatology",
      message:
        "Dr. William Lee is an expert in Dermatology, specializing in the treatment of skin conditions. With 9 years of experience, he has treated everything from acne to more complex skin diseases. Dr. Lee believes in a patient-centric approach, helping individuals feel confident in their skin while addressing both cosmetic and medical concerns. He is passionate about skin health and offers cutting-edge treatments for all skin types.",
    },
    {
      id: 6,
      name: "Dr. Olivia Taylor",
      speciality: "General Physician",
      hospital: "Mediciti Hospital",
      experience: "11 years",
      degree: "MBBS, MD",
      message:
        "Dr. Olivia Taylor is a dedicated General Physician with 11 years of experience in diagnosing and treating a wide range of illnesses. Her expertise includes treating common diseases and managing chronic conditions such as diabetes and hypertension. Dr. Taylor is committed to offering holistic care, providing guidance on prevention and overall health maintenance. She takes time to listen to her patients and offers personalized care.",
    },
    {
      id: 7,
      name: "Dr. David Martinez",
      speciality: "Endocrinologist",
      hospital: "KMC Hospital",
      experience: "13 years",
      degree: "DM, Endocrinology",
      message:
        "Dr. David Martinez is a specialist in Endocrinology with 13 years of experience. He focuses on diagnosing and treating hormonal imbalances and conditions like diabetes, thyroid disorders, and metabolic diseases. Dr. Martinez is committed to providing long-term care, managing conditions to improve his patients' health and well-being. His approach emphasizes education, helping patients understand their conditions and take an active role in their treatment.",
    },
    {
      id: 8,
      name: "Dr. Sophia Wilson",
      speciality: "Gynecologist",
      hospital: "Teaching Hospital",
      experience: "14 years",
      degree: "MD, Obstetrics & Gynecology",
      message:
        "Dr. Sophia Wilson is a highly experienced Gynecologist with a focus on women's health. With 14 years of practice, she specializes in prenatal care, reproductive health, and women's wellness. Dr. Wilson is passionate about educating women on their health choices and providing them with compassionate care during every stage of life.",
    },
    {
      id: 9,
      name: "Dr. Benjamin Anderson",
      speciality: "Pulmonologist",
      hospital: "Grande Hospital",
      experience: "16 years",
      degree: "DM, Pulmonology",
      message:
        "Dr. Benjamin Anderson is a Pulmonologist with 16 years of experience treating respiratory disorders. He specializes in managing chronic conditions like asthma, COPD, and sleep apnea, as well as treating acute respiratory infections. Dr. Anderson takes a personalized approach to care, ensuring his patients have the necessary treatments and lifestyle adjustments to breathe easier and live better.",
    },
    {
      id: 10,
      name: "Dr. Mia Thomas",
      speciality: "Oncologist",
      hospital: "Mediciti Hospital",
      experience: "18 years",
      degree: "DM, Oncology",
      message:
        "Dr. Mia Thomas is a compassionate Oncologist with 18 years of experience in treating cancer patients. Her focus is on early diagnosis and effective treatment of various cancers. Dr. Thomas provides a comprehensive care plan for her patients, addressing both the medical and emotional aspects of the disease. She believes in supporting patients throughout their journey, helping them understand their treatment options and cope with the challenges of cancer.",
    },
    {
      id: 11,
      name: "Dr. James Wilson",
      speciality: "Psychiatrist",
      hospital: "KMC Hospital",
      experience: "20 years",
      degree: "MD, Psychiatry",
      message:
        "Dr. James Wilson is a Psychiatrist with two decades of experience in mental health care. He specializes in diagnosing and treating a wide range of psychiatric conditions, including depression, anxiety, and schizophrenia. Dr. Wilson takes an empathetic approach to mental health, believing in a strong patient-doctor relationship to ensure his patients feel supported and understood throughout their treatment.",
    },
    {
      id: 12,
      name: "Dr. Ava Miller",
      speciality: "Nephrologist",
      hospital: "Teaching Hospital",
      experience: "15 years",
      degree: "DM, Nephrology",
      message:
        "Dr. Ava Miller is a Nephrologist with 15 years of experience in treating kidney-related diseases. She specializes in managing chronic kidney conditions, dialysis, and kidney transplants. Dr. Miller is dedicated to helping patients maintain kidney function and improve their quality of life through tailored treatment plans and lifestyle modifications.",
    },
    {
      id: 13,
      name: "Dr. Elijah White",
      speciality: "ENT Specialist",
      hospital: "Grande Hospital",
      experience: "7 years",
      degree: "MS, ENT",
      message:
        "Dr. Elijah White is an experienced ENT Specialist, with 7 years of practice in treating ear, nose, and throat conditions. His expertise covers everything from hearing loss to sinus issues, ensuring his patients get effective treatments for their conditions. Dr. White is dedicated to improving his patients' quality of life through both medical and surgical interventions.",
    },
    {
      id: 14,
      name: "Dr. Harper Scott",
      speciality: "Ophthalmologist",
      hospital: "Mediciti Hospital",
      experience: "9 years",
      degree: "MS, Ophthalmology",
      message:
        "Dr. Harper Scott is an Ophthalmologist with 9 years of experience in treating eye conditions. She specializes in vision correction, cataract surgery, and the treatment of eye diseases such as glaucoma. Dr. Scott is committed to ensuring her patients maintain good vision and a healthy quality of life.",
    },
    {
      id: 15,
      name: "Dr. Nathan King",
      speciality: "Gastroenterologist",
      hospital: "KMC Hospital",
      experience: "12 years",
      degree: "DM, Gastroenterology",
      message:
        "Dr. Nathan King is a Gastroenterologist with 12 years of experience in treating digestive disorders. He specializes in conditions such as irritable bowel syndrome, liver diseases, and gastrointestinal cancers. Dr. King provides comprehensive care to help his patients manage and recover from digestive health problems.",
    },
    {
      id: 16,
      name: "Dr. Isabella Parker",
      speciality: "Radiologist",
      hospital: "Teaching Hospital",
      experience: "10 years",
      degree: "MD, Radiology",
      message:
        "Dr. Isabella Parker is a Radiologist with 10 years of experience in interpreting medical images for accurate diagnosis. She specializes in CT scans, MRIs, and X-rays, helping doctors make informed decisions about treatment. Dr. Parker plays a vital role in detecting conditions early and ensuring patients receive appropriate care.",
    },
    {
      id: 17,
      name: "Dr. Daniel Rodriguez",
      speciality: "Urologist",
      hospital: "Grande Hospital",
      experience: "14 years",
      degree: "MCh, Urology",
      message:
        "Dr. Daniel Rodriguez is a Urologist with 14 years of experience in diagnosing and treating urinary tract and male reproductive issues. His practice includes performing surgeries and providing non-invasive treatments for conditions such as kidney stones, prostate disorders, and erectile dysfunction. Dr. Rodriguez believes in offering both medical and surgical care to improve his patients' health.",
    },
    {
      id: 18,
      name: "Dr. Lily Turner",
      speciality: "Rheumatologist",
      hospital: "Mediciti Hospital",
      experience: "11 years",
      degree: "DM, Rheumatology",
      message:
        "Dr. Lily Turner is a skilled Rheumatologist with 11 years of experience in treating autoimmune diseases and musculoskeletal disorders. Her focus includes conditions like arthritis, lupus, and osteoporosis. Dr. Turner provides personalized care to help her patients manage their conditions and improve their overall well-being.",
    },
    {
      id: 19,
      name: "Dr. Lucas Hall",
      speciality: "Plastic Surgeon",
      hospital: "KMC Hospital",
      experience: "17 years",
      degree: "MCh, Plastic Surgery",
      message:
        "Dr. Lucas Hall is a Plastic Surgeon with 17 years of experience specializing in both reconstructive and aesthetic surgery. He helps patients recover from trauma and surgical procedures while also offering cosmetic enhancements. Dr. Hall takes pride in helping patients achieve both functional and aesthetic results that improve their confidence and quality of life.",
    },
    {
      id: 20,
      name: "Dr. Charlotte Carter",
      speciality: "Anesthesiologist",
      hospital: "Teaching Hospital",
      experience: "13 years",
      degree: "MD, Anesthesiology",
      message:
        "Dr. Charlotte Carter is an experienced Anesthesiologist with 13 years of practice in ensuring patient safety during surgery. She specializes in administering anesthesia and monitoring patients throughout surgical procedures. Dr. Carter is committed to providing pain management solutions and ensuring that her patients are comfortable and secure during their medical procedures.",
    },
  ];

  const selectdoctor = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.speciality.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.hospital.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex w-full p-4">
        <input
          type="text"
          placeholder="Search doctors"
          className="w-full p-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 shadow-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
      </div>

      {isAuthenticated ? (
        <div>
          {selectdoctor.length > 0 ? (
            selectdoctor.map((doctor) => (
              <div key={doctor.id} className="mt-4 ml-4 mr-2.5">
                <div className="w-full  p-4 my-1 bg-white shadow-md rounded-md grid grid-cols-2">
                  <div>
                    <h3 className="mb-2">Doctors Name: {doctor.name}</h3>

                    <p className="mb-2">Speciality: {doctor.speciality}</p>
                    <h3 className="mb-2">Hospital:{doctor.hospital}</h3>
                    <p className="mb-2">Experience: {doctor.experience}</p>
                    <p className="mb-2">Degree: {doctor.degree}</p>
                    <div className="justify-end flex mt-8 bg-[#ff4757] w-fit px-4 py-2 rounded-md text-white cursor-pointer">
                      <button
                        className="cursor-pointer"
                        onClick={() =>
                          navigate("/bookdoctor", { state: { doctor } })
                        }
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <img
                      src={img1}
                      className="w-[250px] h-[250px] rounded-full "
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 mt-4 ">No doctors found</p>
          )}
        </div>
      ) : (
        <p className="ml-4">Please login to book appointement</p>
      )}
    </div>
  );
};

export default Doctorslist;
