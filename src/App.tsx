import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { WaitlistPage } from './pages/WaitlistPage';
import { Features } from './pages/Features';
import { FeatureDetail } from './pages/FeatureDetail';
import { ActionsFeature } from './pages/features/ActionsFeature';
import { ActionCategory } from './pages/features/ActionCategory';
import { PipelinesFeature } from './pages/features/PipelinesFeature';
import { AgentsFeature } from './pages/features/AgentsFeature';
import { KnowledgeBaseFeature } from './pages/features/KnowledgeBaseFeature';
// Import Use Cases pages
import { UseCases } from './pages/UseCases';
import { TaskAutomation } from './pages/use-cases/TaskAutomation';
import { KnowledgeManagement } from './pages/use-cases/KnowledgeManagement';
import { ContentCreation } from './pages/use-cases/ContentCreation';
import { MeetingEnhancement } from './pages/use-cases/MeetingEnhancement';
import { ProjectManagement } from './pages/use-cases/ProjectManagement';
import { PersonalAssistant } from './pages/use-cases/PersonalAssistant';
import { LearningAcceleration } from './pages/use-cases/LearningAcceleration';
import { DataAnalysis } from './pages/use-cases/DataAnalysis';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="waitlist" element={<WaitlistPage />} />
                    <Route path="features" element={<Features />} />

                    {/* Feature Detail Pages */}
                    <Route
                        path="features/actions"
                        element={<ActionsFeature />}
                    />
                    <Route
                        path="features/actions/:categoryId"
                        element={<ActionCategory />}
                    />
                    <Route
                        path="features/pipelines"
                        element={<PipelinesFeature />}
                    />
                    <Route path="features/agents" element={<AgentsFeature />} />
                    <Route
                        path="features/knowledge-base"
                        element={<KnowledgeBaseFeature />}
                    />

                    {/* Legacy route for backward compatibility */}
                    <Route
                        path="features/:featureId"
                        element={<FeatureDetail />}
                    />

                    {/* Use Cases Routes */}
                    <Route path="use-cases" element={<UseCases />} />
                    <Route
                        path="use-cases/task-automation"
                        element={<TaskAutomation />}
                    />
                    <Route
                        path="use-cases/knowledge-management"
                        element={<KnowledgeManagement />}
                    />
                    <Route
                        path="use-cases/content-creation"
                        element={<ContentCreation />}
                    />
                    <Route
                        path="use-cases/meeting-enhancement"
                        element={<MeetingEnhancement />}
                    />
                    <Route
                        path="use-cases/project-management"
                        element={<ProjectManagement />}
                    />
                    <Route
                        path="use-cases/personal-assistant"
                        element={<PersonalAssistant />}
                    />
                    <Route
                        path="use-cases/learning-acceleration"
                        element={<LearningAcceleration />}
                    />
                    <Route
                        path="use-cases/data-analysis"
                        element={<DataAnalysis />}
                    />

                    {/* Add more routes as needed */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
