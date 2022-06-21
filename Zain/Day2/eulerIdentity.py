# Supported by: M.Zain ul Abidin
from sympy import *
import streamlit as st

def my_function():
  return(E**(pi*I) + 1)
  try:
    my_function()
  except:
    st.write("Error")