import React from 'react';
import {BrowserRouter as Router, Route,Navigate} from 'react-router-dom';

const App = () => {
 const isAuthenticated = false; // Replace with actual authentication logic
 const loading = false; // Replace with actual loading state
 
 if (loading) {
   return (
   <div className="flex justify-center items-center h-screen">
    <p>Loading...</p>
    </div>
    );
 }
 return (
   <Router>
    <Routes>
     <Route 
     path="/"
       element={ isAuthenticated ? 
       <Navigate to="/dashboard" />:
       <Navigate to="/login" replace/>} 
     />
     
     <Route path="/login"  element={<LoginPage />} />
     <Route path="/register" element={<RegisterPage />} />
     
     {/*Protected Routes*/}
      <Route element={<ProtectedRoute />}>
       <Route path="/dashboard" element={<DashboardPage />} />
       <Route path="/documents" element={<DocumentsListPage />} />
       <Route path="/documents/:id" element={<DocumentDetailPage />} />
       <Route path="/flashcards" element={<FlashcardsListPage />} />
       <Route path="/quizzes/:quizId" element={<QuizTakePage />} />
       <Route path="/quizzes/:quizId/results" element={<QuizResultPage/>} />
       <Route path="/profile" element={<ProfilePage/>} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
   </Router>
 );
}
export default App
