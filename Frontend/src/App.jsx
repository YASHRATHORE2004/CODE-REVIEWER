import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import "./App.css";

function App() {
  const [code, setCode] = useState(`//write your code here`);

  const [review, setReview] = useState(``);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    setIsLoading(true);
    try {
      const base_URL = import.meta.env.VITE_API_URL  || "http://localhost:3000/";
      const url=base_URL + "ai/get-review"
      const response = await axios.post(url, {
        code,
      });

      setReview(response.data);
    } catch (error) {
      setReview(
        "❌ **Error**: Failed to get code review. Please check your connection and try again."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="header">
            <div className="title">Code Editor</div>
          </div>
          <div className="code">
            <Editor
              value={code}
              onValueChange={(newCode) => setCode(newCode)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.js, "prism")
              }
              padding={20}
              style={{
                fontFamily:
                  '"JetBrains Mono", "Fira Code", "Consolas", monospace',
                fontSize: 16,
                border: "none",
                borderRadius: "1rem",
                minHeight: "100%",
                width: "100%",
                outline: "none",
                background: "transparent",
                lineHeight: "1.6",
              }}
              textareaProps={{
                placeholder:
                  "// Write your JavaScript code here...\n// Click 'Review' to get AI feedback!",
              }}
            />
          </div>
          <button onClick={reviewCode} className="review" disabled={isLoading}>
            {isLoading ? "Analyzing..." : "Review Code"}
          </button>
        </div>
        <div className="right">
          <div className="header">
            <div className="title">AI Code Review</div>
          </div>
          {isLoading ? (
            <div className="loading">Analyzing your code...</div>
          ) : review ? (
            <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
          ) : (
            <div
              style={{
                color: "#718096",
                textAlign: "center",
                marginTop: "2rem",
                fontSize: "1.1rem",
                lineHeight: "1.6",
              }}
            >
              <p>
                🤖 <strong>Ready to review your code!</strong>
              </p>
              <p>
                Write or paste your code in the editor and click "Review Code"
                to get AI-powered feedback, suggestions, and improvements.
              </p>
              <div
                style={{
                  marginTop: "1.5rem",
                  padding: "1rem",
                  background:
                    "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
                  borderRadius: "0.5rem",
                  border: "1px solid rgba(102, 126, 234, 0.2)",
                }}
              >
                <strong>✨ Features:</strong>
                <ul style={{ textAlign: "left", marginTop: "0.5rem" }}>
                  <li>Code quality analysis</li>
                  <li>Performance suggestions</li>
                  <li>Best practices recommendations</li>
                  <li>Bug detection</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
