import * as tf from '@tensorflow/tfjs';
import * as mobilenetModule from '@tensorflow-models/mobilenet';
import * as knnClassifier from '@tensorflow-models/knn-classifier';
import * as ui from './ui/';

/**
 * This screen shows the code for the K-Nearest Neighbour classifier which can be
 * used to help predict Diabetes. This uses the Tensorflow Javascript library.
 */

const classifier = knnClassifier.create();

const mobilenet = await mobilenetModule.load();

const img0 = tf.browser.fromPixels(document.getElementById('class0'));
const logits0 = mobilenet.infer(img0, 'conv_preds');
classifier.addExample(logits0, 0);

const img1 = tf.browser.fromPixels(document.getElementById('class1'));
const logits1 = mobilenet.infer(img1, 'conv_preds');
classifier.addExample(logits1, 1);

const x = tf.browser.fromPixels(document.getElementById('test'));
const xlogits = mobilenet.infer(x, 'conv_preds');
console.log('Predictions:');
console.log(classifier.predictClass(xlogits));