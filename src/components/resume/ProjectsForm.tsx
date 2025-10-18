import { ResumeData, Project } from '@/types/resume';

interface Props {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const inputClass = "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white";
const labelClass = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2";
const addButtonClass = "px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors";
const deleteButtonClass = "px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md transition-colors";

export default function ProjectsForm({ data, setData }: Props) {
  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: '',
      technologies: '',
      year: '',
      links: '',
      description: ['']
    };
    setData(prev => ({
      ...prev,
      projects: [...prev.projects, newProject]
    }));
  };

  const updateProject = (id: string, field: keyof Project, value: string | string[]) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map(proj =>
        proj.id === id ? { ...proj, [field]: value } : proj
      )
    }));
  };

  const addProjectDescription = (projectId: string) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map(proj =>
        proj.id === projectId ? { ...proj, description: [...proj.description, ''] } : proj
      )
    }));
  };

  const updateProjectDescription = (projectId: string, index: number, value: string) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map(proj =>
        proj.id === projectId
          ? { ...proj, description: proj.description.map((desc, i) => i === index ? value : desc) }
          : proj
      )
    }));
  };

  const removeProjectDescription = (projectId: string, index: number) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map(proj =>
        proj.id === projectId
          ? { ...proj, description: proj.description.filter((_, i) => i !== index) }
          : proj
      )
    }));
  };

  const removeProject = (id: string) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter(proj => proj.id !== id)
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Projects</h2>
        <button onClick={addProject} className={addButtonClass}>
          + Add Project
        </button>
      </div>

      {data.projects.map((project, index) => (
        <div key={project.id} className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Project #{index + 1}</h3>
            <button onClick={() => removeProject(project.id)} className={deleteButtonClass}>
              Remove
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className={labelClass}>Project Title</label>
              <input
                type="text"
                value={project.title}
                onChange={(e) => updateProject(project.id, 'title', e.target.value)}
                className={inputClass}
                placeholder="AgriVision: AI-Powered Plant Disease Detection System"
              />
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>Technologies Used</label>
              <input
                type="text"
                value={project.technologies}
                onChange={(e) => updateProject(project.id, 'technologies', e.target.value)}
                className={inputClass}
                placeholder="TensorFlow, CNN, OpenCV, Python, Machine Learning"
              />
            </div>

            <div>
              <label className={labelClass}>Year</label>
              <input
                type="text"
                value={project.year}
                onChange={(e) => updateProject(project.id, 'year', e.target.value)}
                className={inputClass}
                placeholder="2025"
              />
            </div>

            <div>
              <label className={labelClass}>Links (GitHub/Live)</label>
              <input
                type="text"
                value={project.links}
                onChange={(e) => updateProject(project.id, 'links', e.target.value)}
                className={inputClass}
                placeholder="\href{https://github.com/...}{GitHub}"
              />
            </div>

            <div className="md:col-span-2">
              <div className="flex justify-between items-center mb-2">
                <label className={labelClass}>Description Points</label>
                <button
                  onClick={() => addProjectDescription(project.id)}
                  className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400"
                >
                  + Add Point
                </button>
              </div>
              
              {project.description.map((desc, descIndex) => (
                <div key={descIndex} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={desc}
                    onChange={(e) => updateProjectDescription(project.id, descIndex, e.target.value)}
                    className={inputClass}
                    placeholder="Describe your achievement or contribution"
                  />
                  {project.description.length > 1 && (
                    <button
                      onClick={() => removeProjectDescription(project.id, descIndex)}
                      className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-md"
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {data.projects.length === 0 && (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          No projects yet. Click "Add Project" to get started.
        </div>
      )}
    </div>
  );
}
