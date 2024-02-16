from flask import Flask, request
from transformers import pipeline
from youtube_transcript_api import YouTubeTranscriptApi


app = Flask(__name__)

@app.get('/summarize')
def summarize_api():
    url = request.args.get('url', '')
    video_id = url.split('=')[1]
    transcript = get_transcript(video_id)
    summary = get_summary(transcript)
    return summary, 200

def get_transcript(video_id):
    transcript_disjointed = YouTubeTranscriptApi.get_transcript(video_id)
    transcript = ' '.join([d['text'] for d in transcript_disjointed])
    return transcript

def get_summary(transcript):
    summariser = pipeline('summarization')
    summary = ''
    for i in range(0, (len(transcript)//1000)+1):
        summary_text = summariser(transcript[i*1000:(i+1)*1000])[0]['summary_text']
        summary = summary + summary_text + ' '
    return summary
    

if __name__ == '__main__':
    app.run()