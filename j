
.lia-picture {
  float: right;
  margin: 1.5em;
  width: 35%;
}

.lia-picture img {
  border-radius: 30px;
  width: 100%;
}

.name {
  font-family: 'Lobster', cursive, Helvetica, sans-serif;
  align-items: center;
  font-size: 3em;
  margin: 0.5em;
}

#content {
  max-width: 960px;
  margin: 0 auto;
  background-color: white;
  padding: 1em;
}


.design-grid {  
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2em;
  padding: 20px;
}

.kfc-body {
  grid-column: 1 / 2;
}

.English-body {
  grid-column: 1 / 2;
}

.natgeo-body {
  grid-column: 1 / 2;
}

@media only screen and (min-width: 37.5em) {
  .design-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2em;
    padding: 20px;
  }

  .kfc-body {
    grid-column: 1 / 2;
  }

  .English-body {
    grid-column: 2 / 3;
  }

  .natgeo-body {
    grid-column: 1 / 2;
  }
}

@media only screen and (min-width: 60.5em) {
  .design-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2em;
    padding: 20px;
  }

  .kfc-body {
    grid-column: 1 / 2;

  }

  .English-body {
    grid-column: 2 / 3;

  }

  .natgeo-body {
    grid-column: 3 / 4;

  }

}

img {
  width: 100%;
  border-radius: 30px;
  padding: 10px;
}

a:hover {
  color: fuchsia
}

p {
  font-family: 'Dancing Script', cursive, Helvetica, sans-serif;
  font-size: 1.5em;
}