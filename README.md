# 📚 RAG Book Assistant - AI Document Question Answering System

![RAG AI Assistant](https://img.shields.io/badge/Generative%20AI-RAG-blue)
![Python](https://img.shields.io/badge/Python-3.10+-yellow)
![LangChain](https://img.shields.io/badge/LangChain-Framework-green)
![Streamlit](https://img.shields.io/badge/Streamlit-App-red)
![Google Gemini](https://img.shields.io/badge/Google-Gemini-orange)

## 🚀 Project Overview

**RAG Book Assistant** is a Generative AI-powered document question-answering application that allows users to upload PDF documents and ask questions based on the uploaded content.

The application uses **Retrieval Augmented Generation (RAG)** architecture to retrieve relevant information from the document and generate accurate answers using Google's Gemini Large Language Model.

Instead of directly asking an LLM, the system first searches the user's document, retrieves the most relevant context, and then provides that context to the LLM for generating grounded responses.

### LIVE DEMO
https://ragproject-xkqirjzjdww8m6lw3r9ohy.streamlit.app/
---

# ✨ Features

✅ Upload PDF documents  
✅ Extract text from PDF files  
✅ Automatic document chunking  
✅ Generate vector embeddings using Gemini Embeddings  
✅ Store embeddings using Chroma Vector Database  
✅ Semantic search using vector similarity  
✅ MMR (Maximum Marginal Relevance) retrieval  
✅ Ask questions from uploaded documents  
✅ Context-aware AI answers  
✅ Prevent hallucination using document-only prompting  
✅ Clean Streamlit user interface  
✅ Fast document retrieval and response generation  

---

# 🏗️ System Architecture

```
                 User
                  |
                  |
            Upload PDF File
                  |
                  ↓
          PDF Document Loader
          (PyPDFLoader)
                  |
                  ↓
        Text Chunking Process
   (RecursiveCharacterTextSplitter)
                  |
                  ↓
          Gemini Embedding Model
                  |
                  ↓
          Chroma Vector Database
                  |
                  ↓
             User Question
                  |
                  ↓
          Similarity Search
            (Retriever)
                  |
                  ↓
       Retrieved Relevant Context
                  |
                  ↓
          Google Gemini LLM
                  |
                  ↓
          Final AI Generated Answer
```

---

# 🧠 What is RAG?

**Retrieval Augmented Generation (RAG)** is a technique that combines:

### 1. Retrieval

Finding relevant information from external knowledge sources.

Example:

```
PDF → Text Chunks → Embeddings → Vector Database → Relevant Context
```

### 2. Generation

Using a Large Language Model to generate answers based on retrieved information.

Example:

```
Context + Question → Gemini → Answer
```

RAG helps reduce hallucination because the AI answers using the provided document context.

---

# 🛠️ Technologies Used

## Programming Language

- Python

## Generative AI

- Google Gemini LLM
- Gemini Embeddings

## Frameworks

- LangChain
- Streamlit

## Vector Database

- ChromaDB

## Document Processing

- PyPDFLoader
- Recursive Character Text Splitter

## Environment Management

- python-dotenv

---

# 📂 Project Structure

```
RAG-Book-Assistant/

│
├── uimain.py                 # Streamlit application
│
├── requirements.txt          # Required dependencies
│
├── .env                      # API keys (not uploaded)
│
├── chroma_db/                # Vector database storage
│
├── README.md                 # Documentation
│
└── .gitignore                # Git ignored files
```

---

# ⚙️ Installation and Setup

## 1. Clone Repository

```bash
git clone https://github.com/your-username/RAG-Book-Assistant.git
```

Move into project directory:

```bash
cd RAG-Book-Assistant
```

---

## 2. Create Virtual Environment

```bash
python -m venv .venv
```

Activate environment:

### Windows

```bash
.venv\Scripts\activate
```

### Linux/Mac

```bash
source .venv/bin/activate
```

---

## 3. Install Dependencies

```bash
pip install -r requirements.txt
```

---

# 🔑 Environment Variables

Create a `.env` file:

```
GEMINI_API_KEY=your_google_gemini_api_key
```

Get your Gemini API key from:

https://aistudio.google.com/

---

# ▶️ Run Application

Start Streamlit:

```bash
streamlit run uimain.py
```

Application will open:

```
http://localhost:8501
```

---

# 📖 How To Use

### Step 1

Upload a PDF document.

Example:

```
Machine Learning Book.pdf
```

---

### Step 2

Click:

```
Create Vector Database
```

The system will:

- Extract PDF text
- Split text into chunks
- Generate embeddings
- Store vectors in ChromaDB

---

### Step 3

Enter your question:

Example:

```
What is the difference between LSTM and GRU?
```

---

### Step 4

Click:

```
Ask Question
```

The AI retrieves relevant information and generates the answer.

---

# 🔍 Retrieval Configuration

The project uses MMR retrieval:

```python
search_type="mmr"

k = 4
fetch_k = 10
lambda_mult = 0.5
```

### Why MMR?

MMR improves retrieval quality by balancing:

- Relevance
- Diversity

This avoids retrieving repeated information.

---

# 🧩 Prompt Engineering

The system prompt instructs Gemini:

```
Answer ONLY using the provided context.

If the answer is not available,
say:

"I could not find the answer in the document."
```

This reduces hallucination and improves reliability.

---

# 🚀 Deployment

## Streamlit Cloud Deployment

Steps:

1. Push project to GitHub

2. Go to Streamlit Cloud

3. Connect GitHub repository

4. Add secrets:

```
GEMINI_API_KEY="your_api_key"
```

5. Deploy application


---

# 📦 Requirements

Example:

```
streamlit
langchain
langchain-community
langchain-google-genai
langchain-core
langchain-text-splitters
chromadb
pypdf
python-dotenv
```

---

# 🔮 Future Improvements

## 1. Multiple Document Support

Allow users to upload multiple PDFs and chat with all documents.

---

## 2. Conversation Memory

Add chat history using:

- LangChain Memory
- Conversation Buffer Memory

---

## 3. Better Vector Database

Replace local ChromaDB with:

- Pinecone
- FAISS
- Weaviate

---

## 4. Source Citation

Display:

- PDF page number
- Retrieved text chunks
- Source references

---

## 5. Authentication

Add:

- User login
- User-specific document storage

---

## 6. Advanced RAG Pipeline

Implement:

- Query rewriting
- Hybrid search
- Re-ranking models
- Agentic RAG

---

# 🎯 Learning Outcomes

Through this project, I learned:

- Retrieval Augmented Generation (RAG)
- Large Language Models (LLMs)
- Vector Embeddings
- Vector Databases
- LangChain Framework
- Prompt Engineering
- Document Processing Pipeline
- Deployment of Generative AI Applications

---

# 👨‍💻 Author

**Rutik Kanzariya**

Data Science | Generative AI | Machine Learning | Software Development


GitHub:

https://github.com/RutikKanzariya


LinkedIn:

https://www.linkedin.com/in/rutik-kanzariya-81a7a82bb/

---

# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.
