from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path

# -------------------------------
# Create FastAPI App
# -------------------------------

app = FastAPI(
    title="RAG AI Assistant",
    description="FastAPI Backend for LangChain + Chroma + Gemini",
    version="1.0.0"
)

# -------------------------------
# CORS Configuration
# -------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],        # Change this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------------------
# Create Required Directories
# -------------------------------

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)

CHROMA_DIR = Path("chroma-db")
CHROMA_DIR.mkdir(exist_ok=True)

# -------------------------------
# Health Check
# -------------------------------

@app.get("/")
async def home():
    return {
        "message": "🚀 RAG AI Assistant Backend Running"
    }


@app.get("/health")
async def health():
    return {
        "status": "OK",
        "server": "Running"
    }


# ==========================================================
# API Routes (Implementation will be added in next steps)
# ==========================================================

@app.post("/upload")
async def upload_document():
    """
    Upload PDF / TXT
    """
    return {
        "message": "Upload API - Coming Soon"
    }


@app.post("/upload-url")
async def upload_website():
    """
    Upload Website URL
    """
    return {
        "message": "Website Upload API - Coming Soon"
    }


@app.post("/chat")
async def chat():
    """
    Ask Questions
    """
    return {
        "message": "Chat API - Coming Soon"
    }


@app.get("/documents")
async def documents():
    """
    List Uploaded Documents
    """
    return {
        "documents": []
    }


@app.delete("/clear-db")
async def clear_database():
    """
    Delete Chroma Database
    """
    return {
        "message": "Database Cleared"
    }