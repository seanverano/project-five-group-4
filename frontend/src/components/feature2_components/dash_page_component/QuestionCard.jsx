import { Plus, Loader2, Pencil, Check, X, Trash2 } from "lucide-react";

const QuestionCard = ({
  questions,
  newQuestion,
  isAddingQuestion,
  editingQuestion,
  editedText,
  onAddQuestion,
  onQuestionChange,
  onStartEditing,
  onCancelEditing,
  onUpdateQuestion,
  onDeleteQuestion,
  onEditChange,
}) => {
  return (
    <div className="rounded-lg bg-white shadow-sm border-2 border-gray-500 font-poppins">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold text-[#019963]">Manage Questions</h2>
        <p className="text-black mt-2">
          Create, update, or delete your questions.
        </p>
      </div>
      <div className="p-4">
        <form onSubmit={onAddQuestion} className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Add a new question"
            value={newQuestion}
            onChange={(e) => onQuestionChange(e.target.value)}
            className="flex-1 border rounded px-2 py-1"
            disabled={isAddingQuestion}
          />
          <button
            type="submit"
            className="bg-[#019963] text-white px-3 py-1 rounded 
                       disabled:opacity-50 flex items-center"
            disabled={isAddingQuestion}
          >
            {isAddingQuestion ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
          </button>
        </form>
        <div className="space-y-2">
          {questions.map((question) => (
            <div
              key={question._id}
              className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
            >
              <div className="flex items-center flex-1 min-w-0">
                {editingQuestion === question._id ? (
                  <input
                    value={editedText}
                    onChange={(e) => onEditChange(e.target.value)}
                    className="flex-1 mr-2 border rounded px-2 py-1"
                  />
                ) : (
                  <span className="text-sm truncate">{question.text}</span>
                )}
              </div>
              <div className="flex space-x-2 ml-2">
                {editingQuestion === question._id ? (
                  <>
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => onUpdateQuestion(question._id)}
                    >
                      <Check className="h-4 w-4" />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={onCancelEditing}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => onStartEditing(question)}
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => onDeleteQuestion(question._id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
