FROM python:3.12.2

WORKDIR /synaptix

COPY ./requirements.txt /synaptix/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /synaptix/requirements.txt

COPY ./app /synaptix/app

ENV PYTHONPATH "${PYTHONPATH}:/synaptix/app"

WORKDIR /synaptix/app

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]
